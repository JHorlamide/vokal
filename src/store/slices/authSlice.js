import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_REFRESH_TOKEN, AUTH_TOKEN } from "constants/AuthConstant";
import FirebaseService from "services/FirebaseService";
import AuthService from "services/AuthService";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const initialState = {
  loading: false,
  user: null,
  message: "",
  showMessage: false,
  redirect: "",
  token: localStorage.getItem(AUTH_TOKEN) || null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    const { email, password } = data;

    try {
      const response = await AuthService.login({ email, password });
      if (response.status === "Success") {
        const { data } = response;
        const token = data.accessToken;
        const user = data.user;

        localStorage.setItem(AUTH_TOKEN, data.accessToken);
        localStorage.setItem(AUTH_REFRESH_TOKEN, data.refreshToken);
        return { token, user };
      }

      return rejectWithValue(response.message?.replace("Firebase: ", ""));
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data;
        return rejectWithValue(message);
      }

      return rejectWithValue(err.message || "Error");
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await AuthService.register({ ...data });

      if (response.status === "Success") {
        const { data } = response;
        const user = { name: data.name, email: data.email };
        return { user };
      }

      return rejectWithValue(response.message?.replace("Firebase: ", ""));
    } catch (err) {
      if (err.response) {
        const { message } = err.response.data;
        return rejectWithValue(message);
      }

      return rejectWithValue(err.message || "Error");
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  const response = await FirebaseService.signOutRequest();
  localStorage.removeItem(AUTH_TOKEN);
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticated: (state, action) => {
      const { payload } = action;

      state.loading = false;
      state.redirect = "/";
      state.user = payload.user;
      state.token = payload.token;
    },

    showAuthMessage: (state, action) => {
      state.message = action.payload;
      state.showMessage = true;
      state.loading = false;
    },

    hideAuthMessage: (state) => {
      state.message = "";
      state.showMessage = false;
    },

    signOutSuccess: (state) => {
      state.loading = false;
      state.token = null;
      state.user = null;
      state.redirect = "/";
    },

    showLoading: (state) => {
      state.loading = true;
    },

    signInSuccess: (state, action) => {
      const { payload } = action;

      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        const { payload } = action;

        state.loading = false;
        state.redirect = "/";
        state.user = payload.user;
        state.token = payload.token;
      })

      .addCase(signIn.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      })

      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })

      .addCase(signUp.fulfilled, (state, action) => {
        const { payload } = action;
        state.loading = false;
        state.redirect = `${APP_PREFIX_PATH}/auth/login`;
        state.user = payload;
      })

      .addCase(signUp.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      })

      .addCase(signOut.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
        state.redirect = "/";
      })

      .addCase(signOut.rejected, (state) => {
        state.loading = false;
        state.token = null;
        state.user = null;
        state.redirect = "/";
      });
  },
});

export const {
  authenticated,
  showAuthMessage,
  hideAuthMessage,
  signOutSuccess,
  showLoading,
  signInSuccess,
} = authSlice.actions;

export default authSlice.reducer;

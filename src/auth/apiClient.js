import axios from "axios";
import { API_BASE_URL } from "configs/AppConfig";
import { AUTH_TOKEN, AUTH_REFRESH_TOKEN } from "constants/AuthConstant";
import { notification } from "antd";
import store from "../store";
import { signOutSuccess } from "store/slices/authSlice";

const unauthorizedCode = [400, 401, 403];

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_TOKEN) || null;

    if (token) {
      config.headers = {
        Authorization: [`Bearer ${token}`],
      };
    }

    return config;
  },
  (error) => {
    // Do something with request error here
    notification.error({
      message: "Error",
    });

    Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => response,

  async (error) => {
    let notificationParam = {
      message: "",
    };

    const prevRequest = error?.config;

    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true;

      const token = localStorage.getItem(AUTH_TOKEN);
      const refreshToken = localStorage.getItem(AUTH_REFRESH_TOKEN);

      const payload = {
        accessToken: token,
        refreshToken: refreshToken,
      };

      const apiResponse = await axios.post(
        `${API_BASE_URL}/auth/refresh-token`,
        payload
      );
      localStorage.setItem(AUTH_TOKEN, apiResponse.data.accessToken);
      localStorage.setItem(AUTH_REFRESH_TOKEN, apiResponse.data.refreshToken);

      prevRequest.headers[
        "Authorization"
      ] = `Bearer ${apiResponse.data.accessToken}`;

      return axiosPrivate(prevRequest);
    }

    if (
      error?.response?.status === 403 &&
      error?.response?.message === "jwt expired"
    ) {
      alert("Session Expired");
      window.location.replace("/login");
      notificationParam.message = "Authentication Fail";
      notificationParam.description = error.response.message;
      localStorage.removeItem(AUTH_TOKEN);
      store.dispatch(signOutSuccess());
      return axiosPrivate(prevRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosPrivate;

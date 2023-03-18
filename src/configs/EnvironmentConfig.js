const dev = {
  API_ENDPOINT_URL: "https://8d01-102-89-34-227.eu.ngrok.io/api",
};

const prod = {
  API_ENDPOINT_URL: "https://8d01-102-89-34-227.eu.ngrok.io/api",
};

const test = {
  API_ENDPOINT_URL: "https://8d01-102-89-34-227.eu.ngrok.io/api",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    default:
      break;
  }
};

export const env = getEnv();
// API_ENDPOINT_URL: "http://localhost:4000/api",

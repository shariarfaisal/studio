import axios, { isAxiosError } from "axios";
import { getCookie } from "cookies-next";

export const $clientPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL,
});
$clientPublic.defaults.headers.common["Accept"] = "application/json";
$clientPublic.defaults.headers.common["X-Request-Source"] = "web";

export const $clientPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL,
});
$clientPrivate.defaults.headers.common["Accept"] = "application/json";
$clientPrivate.defaults.headers.common["X-Request-Source"] = "web";

$clientPrivate.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getCookie("authToken") ?? ""}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$clientPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error) && error.response?.status === 401) {
      // FIXME:
    }
    return Promise.reject(error);
  }
);

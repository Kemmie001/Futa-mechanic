import axios, { AxiosError } from "axios";

const httpBase = axios.create({
  baseURL: "https://futa-fleet-guard.onrender.com/api",
});

const http = axios.create({
  baseURL: "https://futa-fleet-guard.onrender.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config: any) => {
    config.headers["Authorization"] = `Bearer ${window.localStorage.getItem(
      "futaToken"
    )}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (err: any) => {
    if (err instanceof AxiosError) {
      if (err?.response?.status == 401) {
        window.location.href = "/login";
        //delete token redirect to login
        // or
        //if implemented refresh token, try to obtain a new token if ref token is invalid
        //delete token and redirect to loginh

        console.log(err);

        // if (route.path == "/login") return Promise.reject(err)

        return Promise.reject(err);
      }

      return Promise.reject(err);
    }
  }
);

export { http, httpBase };

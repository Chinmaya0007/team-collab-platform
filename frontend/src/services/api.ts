import axios, {
  AxiosError,
  type InternalAxiosRequestConfig,
} from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://team-collab-platform-bsmi.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://team-collab-platform-bsmi.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;

let refreshSubscribers: Array<(token: string) => void> = [];

const subscribeToRefresh = (callback: (token: string) => void) => {
  refreshSubscribers.push(callback);
};

const notifyRefreshSubscribers = (token: string) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest =
      error.config as InternalAxiosRequestConfig & {
        _retry?: boolean;
      };

    if (
      error.response?.status !== 401 ||
      originalRequest?._retry
    ) {
      return Promise.reject(error);
    }

    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve) => {
        subscribeToRefresh((newAccessToken) => {
          originalRequest.headers.Authorization =
            `Bearer ${newAccessToken}`;

          resolve(api(originalRequest));
        });
      });
    }

    isRefreshing = true;

    try {
      const response = await refreshClient.post(
        "/api/v1/auth/refresh",
        {
          refreshToken,
        },
      );

      const newAccessToken =
        response.data.data.accessToken;

      const newRefreshToken =
        response.data.data.refreshToken;

      localStorage.setItem(
        "accessToken",
        newAccessToken,
      );

      localStorage.setItem(
        "refreshToken",
        newRefreshToken,
      );

      notifyRefreshSubscribers(newAccessToken);

      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default api;
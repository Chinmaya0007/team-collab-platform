export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const isAuthenticated = (): boolean => {
  return Boolean(getAccessToken());
};

export const clearAuth = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
};
import api from "./api";

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface RegisterResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export const register = async (
  payload: RegisterPayload,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    "/api/v1/auth/register",
    payload,
  );

  return response.data;
};

export const login = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    "/api/v1/auth/login",
    payload,
  );

  return response.data;
};

export const getMe = async (): Promise<AuthUser> => {
  const response = await api.get<{ success: boolean; data: AuthUser }>(
    "/api/v1/auth/me",
  );

  return response.data.data;
};
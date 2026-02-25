import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import type { ApiSuccessResponse } from "@/types/shared";
import { useAuthStore } from "@/stores/auth-store";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const apiClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: { "Content-Type": "application/json" },
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

function processQueue(error: unknown, token: string | null = null) {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve(token);
  });
  failedQueue = [];
}

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = useAuthStore.getState().refreshToken;
        if (!refreshToken) throw new Error("No refresh token");

        const { data } = await axios.post(`${API_URL}/api/v1/auth/refresh`, { refreshToken });
        const { accessToken, refreshToken: newRefreshToken } = data.data;

        useAuthStore.getState().setTokens(accessToken, newRefreshToken);
        processQueue(null, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        useAuthStore.getState().logout();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export async function apiGet<T>(url: string, params?: Record<string, unknown>): Promise<ApiSuccessResponse<T>> {
  const { data } = await apiClient.get<ApiSuccessResponse<T>>(url, { params });
  return data;
}

export async function apiPost<T>(url: string, body?: unknown): Promise<ApiSuccessResponse<T>> {
  const { data } = await apiClient.post<ApiSuccessResponse<T>>(url, body);
  return data;
}

export async function apiPatch<T>(url: string, body?: unknown): Promise<ApiSuccessResponse<T>> {
  const { data } = await apiClient.patch<ApiSuccessResponse<T>>(url, body);
  return data;
}

export async function apiDelete<T>(url: string): Promise<ApiSuccessResponse<T>> {
  const { data } = await apiClient.delete<ApiSuccessResponse<T>>(url);
  return data;
}

export async function apiDownload(url: string, params?: Record<string, unknown>): Promise<Blob> {
  const { data } = await apiClient.get(url, { params, responseType: "blob" });
  return data;
}

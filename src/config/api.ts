import axios, { AxiosResponse, AxiosError } from 'axios';

import { getToken } from '@config/auth';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Received a unauthorized response, let's force logout
    if (error.response?.status === 401) {
      try {
        window.location.href = '/logout';
      } catch {}
    }

    return Promise.reject(error);
  },
);

interface ResponseAPIError {
  origin: string;
  errors: {
    type: string;
    title: string;
    detail: string;
  }[];
}

export type APIError = AxiosError<ResponseAPIError>;

export const getErrorMessage = (
  response: APIError['response'],
  messageDefault?: string,
) => {
  if (response?.data.errors) {
    return response?.data.errors
      .map(error =>
        error.title !== error.detail
          ? `${error.title} ${error.detail}`
          : error.title,
      )
      .join('\n');
  }

  return messageDefault ?? 'Erro desconhecido.';
};

export default api;

/* eslint-disable unused-imports/no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios';

import { BASE_URL_ENV } from '@/shared/constants';

interface HeadersProps {
  'x-idempotence-key': string;
  'platform-type': string;
  'app-version': string;
  'app-name': string;
  'os-version': string;
  'device-model': string;
  'x-auth-key'?: string;
  'user-name'?: string;
  'device-id'?: string;
}

export const BASE_URL = BASE_URL_ENV.BASEURL_QA
const defaultAxiosTimeOut = {
  timeout: 30000,
};

const createHeaders = () => {
  // Define headers object with explicit types including 'device-id'
  const headers: HeadersProps = {
    'x-idempotence-key': 'stuffWEB',
    'platform-type': 'web',
    'app-version': '1.0.0',
    'app-name': 'stuffWEB',
    'os-version': 'stuffWEB',
    'device-model': 'stuffWEB',
    'x-auth-key': 'stuffWEB',
    'user-name': 'guest',
    'device-id': 'guest',
  };
  return headers;
};

export const api = axios.create({
  baseURL: BASE_URL, // UAT: https://api.eshop2drop.com/ | QA: https://qagateway.eshop2drop.com/ | DEV: https://devgateway.eshop2drop.com/
  timeout: defaultAxiosTimeOut.timeout,
});

api.interceptors.response.use(
  (response) => {
    // Handle successful responses here.
    console.log('Successful response:', response.data); // Log the response data
    return response;
  },
  (error) => {
    // Handle errors here.
    let message = '';

    if (error.response) {
      const response = error.response;

      if (response.status === 500) {
        message = 'SERVER_ERROR';
      } else if (response.status === 408) {
        message = 'TIMEOUT_ERROR';
      } else if (response.status === 503) {
        message = 'CONNECTION_ERROR';
      } else if (response.status >= 400 && response.status < 500) {
        message = response.data.message || response.data.error;
      }
    } else {
      message = 'NETWORK_ERROR';
    }

    if (message) {
      console.log(message, 3000); // Show the error message
    }

    console.error('Error response:', error.response.data); // Log the error response data
    return Promise.reject(error);
  }
);

const setHeaders = (headers: any) => {
  const requestHeaders = createHeaders();
  return { ...requestHeaders, ...headers };
};

const apiService = {
  get: async (path: string, params = {}, headers?: Headers, axiosConfig?: AxiosRequestConfig) => {
    const returnHeaders = setHeaders(headers);
    const newAxiosconfig = { ...axiosConfig, headers: returnHeaders };
    return api.get(path, { params, ...newAxiosconfig });
  },
  patch: async (path: string, data = {}, headers?: Headers, axiosConfig?: AxiosRequestConfig) => {
    const returnHeaders = setHeaders(headers);
    const newAxiosconfig = { ...axiosConfig, headers: returnHeaders };
    return api.patch(path, data, newAxiosconfig);
  },
  put: async (path: string, data = {}, headers?: Headers, axiosConfig?: AxiosRequestConfig) => {
    const returnHeaders = setHeaders(headers);
    const newAxiosconfig = { ...axiosConfig, headers: returnHeaders };
    return api.put(path, data, newAxiosconfig);
  },
  post: async (
    path: string,
    data = {},
    headers?: Headers,
    customAPICreate?: any,
    axiosConfig: AxiosRequestConfig = defaultAxiosTimeOut
  ) => {
    if (customAPICreate) {
      const returnHeaders = setHeaders(headers);
      return customAPICreate.post(path, data, { headers: returnHeaders });
    }

    const returnHeaders = setHeaders(headers);
    return api.post(path, data, { ...axiosConfig, headers: returnHeaders });
  },
  delete: async (path: string, params = {}, headers: Headers, axiosConfig?: AxiosRequestConfig) => {
    const returnHeaders = setHeaders(headers);
    return api.delete(path, { params, ...axiosConfig, headers: returnHeaders });
  },
};

export default apiService;

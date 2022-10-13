import axios, { AxiosRequestConfig } from 'axios';
import cookies, { CookiesKeys } from 'services/cookies';

const instance = axios.create({
  baseURL: 'https://gscore-back.herokuapp.com/api/',
});

instance.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${cookies.getItem(CookiesKeys.token)}`;
  return config;
});

class Http {
  async get(endpoint: string, config: AxiosRequestConfig = {}) {
    return await instance.get(endpoint, config);
  }
  async post(endpoint: string, requestBody: object, config: AxiosRequestConfig = {}) {
    return await instance.post(endpoint, requestBody, config);
  }
}

const http = new Http();

Object.freeze(Http);

export default http;

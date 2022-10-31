import axios, { AxiosRequestConfig } from 'axios';
import cookies, { CookiesKeys } from 'services/cookies';
import _ from 'lodash';

const _baseUrl = 'https://gscore-back.herokuapp.com/api/';
const instance = axios.create({
  baseURL: _baseUrl,
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
    if (_.isEmpty(config)) {
      return await instance.get(endpoint, config);
    } else {
      return await axios.get(_baseUrl + endpoint, config);
    }
  }
  async post(endpoint: string, requestBody: object, config: AxiosRequestConfig = {}) {
    return await instance.post(endpoint, requestBody, config);
  }
  async patch(endpoint: string, requestBody: object, config: AxiosRequestConfig = {}) {
    return await instance.patch(endpoint, requestBody, config);
  }
  async put(endpoint: string, requestBody: object, config: AxiosRequestConfig = {}) {
    return await instance.put(endpoint, requestBody, config);
  }
}

const http = new Http();

Object.freeze(Http);

export default http;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import _ from 'lodash';

import http from 'services/http';

type ProductInfo = {
  priceId: number;
};

type ChangeSubscribeReq = {
  productId: number;
  subscribeId: number;
}

const API = {
  buySubscribe: 'payments/buy',
  getSubscribes: 'subscribe/self',
  changeSubscribe: 'subscribe/change-product',
};

export const buySubscribe = createAsyncThunk(
  'subscribes/buy',
  async (productInfo: ProductInfo, { rejectWithValue }) => {
    try {
      const result = await http.post(API.buySubscribe, productInfo);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const getSubscribes = createAsyncThunk(
  'subscribes/get',
  async (requestConfig: AxiosRequestConfig = {}, { rejectWithValue }) => {
    try {
      const result = await http.get(API.getSubscribes, requestConfig);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const changeSubscribe = createAsyncThunk(
  'subscribes/change',
  async (changeSubReq: ChangeSubscribeReq, { rejectWithValue }) => {
    try {
      const result = await http.post(API.changeSubscribe, changeSubReq);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import http from 'services/http';

type ProductInfo = {
  priceId: number;
};

const API = {
  buySubscribe: 'payments/buy',
  getSubscribes: 'subscribe/self',
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

export const getSubscribes = createAsyncThunk('subscribes/get', async (_, { rejectWithValue }) => {
  try {
    const result = await http.get(API.getSubscribes);
    return result.data;
  } catch (err: any) {
    if (axios.isAxiosError(err) && err.response) {
      return rejectWithValue(err.response.data);
    }
  }
});

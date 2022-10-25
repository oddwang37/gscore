import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';

import http from 'services/http';

type ActivateCode = {
  code: string;
};
const API = {
  getCodes: 'code/self',
  activateCode: 'code/activate',
};

export const getCodes = createAsyncThunk(
  'codes/get',
  async (requestConfig: AxiosRequestConfig = {}, { rejectWithValue }) => {
    try {
      const result = await http.get(API.getCodes, requestConfig);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const activateCode = createAsyncThunk(
  'codes/activate',
  async (code: ActivateCode, { rejectWithValue }) => {
    try {
      const result = await http.post(API.activateCode, code);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import http from 'services/http';

const API = {
  getProducts: 'products',
};

export const getProductsList = createAsyncThunk(
  'products/get-list',
  async (_, { rejectWithValue }) => {
    try {
      const result = await http.get(API.getProducts);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

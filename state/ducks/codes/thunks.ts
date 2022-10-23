import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import http from 'services/http';

const API = {
  getCodes: 'code/self',
};

export const getCodes = createAsyncThunk('codes/get', async (_, { rejectWithValue }) => {
  try {
    const result = await http.get(API.getCodes);
    return result.data;
  } catch (err: any) {
    if (axios.isAxiosError(err) && err.response) {
      return rejectWithValue(err.response.data);
    }
  }
});

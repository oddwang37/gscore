import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import http from 'services/http';

interface SignInInfo {
  email: string;
  password: string;
}

interface SignUpInfo extends SignInInfo {
  username: string;
}

const API = {
  loginUser: 'users/sign-in',
  registerUser: 'users/sign-up',
  getMe: 'users/me',
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (authInfo: SignInInfo, { rejectWithValue }) => {
    try {
      const result = await http.post(API.loginUser, authInfo);
      return result.data;
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (authInfo: SignUpInfo, { rejectWithValue }) => {
    try {
      const result = await http.post(API.registerUser, authInfo);
      return result.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const getMe = createAsyncThunk('auth/get-me', async (_, { rejectWithValue }) => {
  try {
    const result = await http.get(API.getMe);
    return result.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return rejectWithValue(err.response.data);
    }
  }
});

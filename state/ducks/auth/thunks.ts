import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface SignInInfo {
  email: string;
  password: string;
}

interface SignUpInfo extends SignInInfo {
  username: string;
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async (authInfo: SignInInfo, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        'https://gscore-back.herokuapp.com/api/users/sign-in',
        authInfo,
      );
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
      const result = await axios.post(
        'https://gscore-back.herokuapp.com/api/users/sign-up',
        authInfo,
      );
      return result.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

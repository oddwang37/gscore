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

interface UpdatePasswordReq {
  currentPassword: string;
  newPassword: string;
}

interface UpdatePersonalDataReq {
  username: string;
  email: string;
}

const API = {
  loginUser: 'users/sign-in',
  registerUser: 'users/sign-up',
  getMe: 'users/me',
  updatePassword: 'users/update-password',
  updatePersonalData: 'users',
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

export const updatePassword = createAsyncThunk(
  'auth/update-password',
  async (passwordInfo: UpdatePasswordReq, { rejectWithValue }) => {
    try {
      const result = await http.patch(API.updatePassword, passwordInfo);
      return result.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

export const updatePersonalData = createAsyncThunk(
  'auth/update-personal-data',
  async (personalInfo: UpdatePersonalDataReq, { rejectWithValue }) => {
    try {
      const result = await http.patch(API.updatePersonalData, personalInfo);
      return result.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
    }
  },
);

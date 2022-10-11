import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SignInInfo {
  email: string;
  password: string;
}

interface SignUpInfo extends SignInInfo {
  username: string;
}

interface AuthState {
  token: string;
  username: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  token: '',
  username: '',
  isLoading: false,
};

export const loginUser = createAsyncThunk('auth/login', async (authInfo: SignInInfo) => {
  const result = await axios.post('https://gscore-back.herokuapp.com/api/users/sign-in', authInfo);
  return result.data;
});
export const registerUser = createAsyncThunk('auth/register', async (authInfo: SignUpInfo) => {
  const result = await axios.post('https://gscore-back.herokuapp.com/api/users/sign-up', authInfo);
  return result.data;
});

const authSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.username = action.payload.username;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      console.log(action.payload);
    });
  },
});

export default authSlice.reducer;

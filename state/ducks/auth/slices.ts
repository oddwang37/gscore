import { createSlice } from '@reduxjs/toolkit';

import cookies, { CookiesKeys } from 'services/cookies';
import { registerUser, loginUser, updatePersonalData, updatePassword, getMe } from './thunks';

interface AuthState {
  userInfo: {
    id: number | null;
    email: string;
    username: string;
  };
  isLoading: boolean;
}

const initialState: AuthState = {
  userInfo: {
    id: null,
    email: '',
    username: '',
  },
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo.username = '';
      state.userInfo.email = '';
      state.userInfo.id = null;
      cookies.deleteItem(CookiesKeys.token);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      cookies.setItem(CookiesKeys.token, action.payload.token);
      state.userInfo.email = action.payload.email;
      state.userInfo.username = action.payload.username;
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action.payload);
      cookies.setItem(CookiesKeys.token, action.payload.token);
      state.userInfo = action.payload.user;
      console.log(action.payload);
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updatePersonalData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePersonalData.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updatePersonalData.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updatePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

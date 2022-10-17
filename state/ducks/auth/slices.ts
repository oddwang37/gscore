import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import cookies, { CookiesKeys } from 'services/cookies';

import { registerUser, loginUser, getMe } from './thunks';

interface AuthState {
  username: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  username: '',
  isLoading: false,
};

const authSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    logout: (state) => {
      state.username = '';
      cookies.deleteItem(CookiesKeys.token);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {});
    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      cookies.setItem(CookiesKeys.token, action.payload.token);
      state.username = action.payload.username;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      cookies.setItem(CookiesKeys.token, action.payload.token);
      state.username = action.payload.user.username;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

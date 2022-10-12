import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './thunks';

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
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.username = action.payload.user.username;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;

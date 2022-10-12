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
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      console.log(action.payload);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export default authSlice.reducer;

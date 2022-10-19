import { createSlice } from '@reduxjs/toolkit';

import { getProductsList } from './thunks';
import type { Products } from './types';

interface AuthState {
  list: Products;
}

const initialState: AuthState = {
  list: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default productsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

import { getProductsList } from './thunks';
import type { Products } from './types';

interface ProductsState {
  list: Products;
  selectedId: number | null;
}

const initialState: ProductsState = {
  list: [],
  selectedId: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedId(state, action) {
      state.selectedId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setSelectedId } = productsSlice.actions;

export default productsSlice.reducer;

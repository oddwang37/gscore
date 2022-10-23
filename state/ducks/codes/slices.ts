import { createSlice } from '@reduxjs/toolkit';

import { getCodes } from './thunks';
import type { Codes } from './types';

interface CodesState {
  codes: Codes;
}

const initialState: CodesState = {
  codes: [],
};

const codesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCodes.fulfilled, (state, action) => {
      state.codes = action.payload;
    });
  },
});

export default codesSlice.reducer;

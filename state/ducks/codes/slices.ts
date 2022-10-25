import { createSlice } from '@reduxjs/toolkit';

import { getCodes, activateCode } from './thunks';
import type { Codes } from './types';

interface CodesState {
  codes: Codes;
  isLoading: boolean;
}

const initialState: CodesState = {
  codes: [],
  isLoading: false,
};

const codesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCodes.fulfilled, (state, action) => {
      state.codes = action.payload;
    });
    builder.addCase(activateCode.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(activateCode.fulfilled, (state, action) => {
      state.isLoading = false;
      state.codes = state.codes.map((code) => {
        if (code.id === action.payload.id) {
          return action.payload;
        } else return code;
      });
    });
    builder.addCase(activateCode.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default codesSlice.reducer;

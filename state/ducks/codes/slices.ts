import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

import { getCodes, activateCode, manageCodes } from './thunks';
import type { Codes } from './types';

interface CodesState {
  codes: Codes;
  selectedCodesIds: number[];
  isLoading: boolean;
}

const initialState: CodesState = {
  codes: [],
  selectedCodesIds: [],
  isLoading: false,
};

const codesSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCode(state, action) {
      state.selectedCodesIds.push(action.payload);
    },
    deselectCode(state, action) {
      state.selectedCodesIds = state.selectedCodesIds.filter((codeId) => codeId !== action.payload);
    },
    clearSelectedCodes(state) {
      state.selectedCodesIds = [];
    },
  },
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
    builder.addCase(activateCode.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(manageCodes.fulfilled, (state, action) => {
      /* const subscribeId = state.codes.find(
        (code) => code.id === state.selectedCodesIds[0],
      )?.subscribeId;
      const codesWithoutHold = state.codes.filter(
        (code) => code.subscribeId === subscribeId && code.status === 'HOLD',
      );
      console.log(codesWithoutHold);
      state.codes = _.merge(codesWithoutHold, action.payload);
      state.selectedCodesIds = []; */
      const subscribeId = action.payload[0].subscribeId;
      state.codes = state.codes
        .filter((code) => code.subscribeId !== subscribeId)
        .concat(action.payload);
      state.selectedCodesIds = [];
    });
  },
});

export const { selectCode, deselectCode, clearSelectedCodes } = codesSlice.actions;

export default codesSlice.reducer;

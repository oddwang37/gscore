import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'state/store';
import { Codes } from '../subscribes/types';

export const allSubs = (state: RootState) => state.subscribes.subscribes;

export const allCodes = (state: RootState) => state.codes.codes;

export const codesOfSub = createSelector(
  [allCodes, (state: RootState, subId: number) => subId],
  (allCodes, subId) => {
    return allCodes.filter((code) => subId === code.subscribeId);
  },
);

export const selectedCodesIds = (state: RootState) => state.codes.selectedCodesIds;

export const isCodeSelected = createSelector(
  [selectedCodesIds, (state: RootState, codeId: number) => codeId],
  (selectedCodesIds, codeId) => {
    return selectedCodesIds.includes(codeId);
  },
);

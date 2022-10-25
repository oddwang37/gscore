import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'state/store';
import { Codes } from '../subscribes/types';

export const allSubs = (state: RootState) => state.subscribes.subscribes;

export const allCodes = (state: RootState) => state.codes.codes;

export const codesOfSub = createSelector(
  [allCodes, (state: RootState, subId: number) => subId],
  (allCodes, subId) => {
    const codes: Codes = [];
    return allCodes.filter((code) => subId === code.subscribeId);
  },
);

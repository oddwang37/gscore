import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'state/store';

export const mySubscriptions = (state: RootState) => state.subscribes.subscribes;

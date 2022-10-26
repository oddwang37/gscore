import { createSlice } from '@reduxjs/toolkit';

import { buySubscribe, getSubscribes, changeSubscribe } from './thunks';
import { Subscribes, Subscribe } from './types';

interface SubscribesState {
  subscribes: Subscribes;
}

const initialState: SubscribesState = {
  subscribes: [],
};

const subscribesSlice = createSlice({
  name: 'subscribes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubscribes.fulfilled, (state, action) => {
      state.subscribes = action.payload;
    });
    builder.addCase(changeSubscribe.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default subscribesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface State {
  number: number;
}
const initialState = {
  number: 5,
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    addNumber: (state) => {
      ++state.number;
    },
  },
});

export const { addNumber } = someSlice.actions;
export default someSlice.reducer;

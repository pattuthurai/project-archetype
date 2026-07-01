// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit lets us write direct "mutating" logic safely
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export the actions so components can trigger them
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to plug into the store
export default counterSlice.reducer;

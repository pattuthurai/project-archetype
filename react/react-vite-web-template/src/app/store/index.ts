// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../components/common/counterSlice.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // This matches the data sub-tree
  },
});

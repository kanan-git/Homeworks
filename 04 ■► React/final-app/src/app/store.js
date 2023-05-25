import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    language: langReducer,
  },
});

export default store
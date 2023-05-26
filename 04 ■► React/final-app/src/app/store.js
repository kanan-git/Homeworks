import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/counter/counterSlice';
import authTypeReducer from '../features/counter/switchAuthType'

const store = configureStore({
  reducer: {
    language: langReducer,
    authtype: authTypeReducer
  },
});

export default store
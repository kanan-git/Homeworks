import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/counter/counterSlice';
import authTypeReducer from '../features/counter/switchAuthType'
import newUserReducer from '../features/counter/newuserSlice'

const store = configureStore({
  reducer: {
    language: langReducer,
    authtype: authTypeReducer,
    userdata: newUserReducer
  },
});

export default store
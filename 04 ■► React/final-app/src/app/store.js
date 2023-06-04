import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/counter/counterSlice';
import authTypeReducer from '../features/counter/switchAuthType'
import newUserReducer from '../features/counter/newuserSlice'
import productReducer from '../features/counter/selectedProduct'

const store = configureStore({
  reducer: {
    language: langReducer,
    authtype: authTypeReducer,
    userdata: newUserReducer,
    selectedProduct: productReducer
  },
});

export default store
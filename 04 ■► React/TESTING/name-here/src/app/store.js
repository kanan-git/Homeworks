import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/counter/authSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
    // Additional reducers can be added here
  },
})

export default store
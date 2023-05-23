import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Additional reducers can be added here
  },
})

export default store
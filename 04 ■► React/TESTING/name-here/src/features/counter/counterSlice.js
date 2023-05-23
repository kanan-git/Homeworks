import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0, // Initial state of the counter
  
    reducers: {
      increment: (state) => state + 1,
      decrement: (state) => state - 1,
      incrementByAmount: (state, action) => state + action.payload,
      // Additional reducers can be added here
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
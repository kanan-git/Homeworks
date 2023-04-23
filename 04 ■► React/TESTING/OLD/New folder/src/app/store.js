import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from '../features/expense/expenseSlice'

export const store = configureStore({
  reducer: {
    expense: expenseSlice //reducer in store js
  }
})
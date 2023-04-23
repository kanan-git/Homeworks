import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     value: 0
// }

export const expenseSlice = createSlice({
    name: 'expence',
    initialState: {
        expenseList: [
            {name: 'apple', price: 1200},
            {name: 'orange', price: 5000},
        ]
    },
    reducers: {
        addExpense: (currentSlice, action) => {
            currentSlice.expenseList.push({name: 'test', price: 5555})
        }
    }
})

export const { addExpense } = expenseSlice.actions

export default expenseSlice.reducer
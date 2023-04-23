import { createSlice } from '@reduxjs/toolkit'

export const expenseSlice = createSlice({ // expenseSlice is slice of props
    name: "expense", // reducer named expense
    initialState: {
        expenseList: [
            {name: 'apple', price: 1200},
            {name: 'orange', price: 5000}
        ]
    },
    reducers: { // reducers of expence reducer
        addExpense: (currentSlice, action) => { // function which get data and push into expenseList
            currentSlice.expenseList.push({name: 'test', price: 5555})
        }
    }
})

export const { addExpense } = expenseSlice.actions
export default expenseSlice.reducer
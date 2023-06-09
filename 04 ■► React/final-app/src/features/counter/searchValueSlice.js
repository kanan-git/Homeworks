import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentSearchValue: ""
}

const searchSlice = createSlice(
    {
        name: "searching",
        initialState,
        reducers: {
            setCurrentSearchValue: (state, action) => {
                state.currentSearchValue = action.payload
            }
        }
    }
)

export const { setCurrentSearchValue } = searchSlice.actions
export default searchSlice.reducer
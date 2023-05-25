import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentLanguage: "English", // "English" | "Azərbaycan dili" | "Turkçe"
}

const langSlice = createSlice(
    {
        name: "language",
        initialState,
        reducers: {
            setCurrentLanguage: (state, action) => {
                state.currentLanguage = action.payload
            }
        }
    }
)

export const { setCurrentLanguage } = langSlice.actions
export default langSlice.reducer
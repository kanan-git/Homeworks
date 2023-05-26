import { createSlice } from '@reduxjs/toolkit'
import {dataSource} from '../../data/data-source'

const initialState = {
    currentLanguage: dataSource.english, // "English" | "Azərbaycan dili" | "Turkçe" | dataSource
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
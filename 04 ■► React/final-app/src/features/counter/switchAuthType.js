import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentAuthType: "login", // "login" | "register"
}

const curAuthTypeSlice = createSlice(
    {
        name: "authtype",
        initialState,
        reducers: {
            setCurrentAuthType: (state, action) => {
                state.currentAuthType = action.payload
            }
        }
    }
)

export const { setCurrentAuthType } = curAuthTypeSlice.actions
export default curAuthTypeSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userObject: {}
}

const userObjSlice = createSlice(
    {
        name: "userdata",
        initialState,
        reducers: {
            setUserObject: (state, action) => {
                state.userObject = action.payload
            }
        }
    }
)

export const { setUserObject } = userObjSlice.actions
export default userObjSlice.reducer
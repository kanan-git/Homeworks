import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducers: {
    setAuthValue: (state, action) => {
      return action.payload;
    },
  },
})

export const { setAuthValue } = authSlice.actions
export default authSlice.reducer
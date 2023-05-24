import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fakeConditionX: "login", // Initial value
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFakeConditionX: (state, action) => {
      state.fakeConditionX = action.payload;
    },
  },
});

export const { setFakeConditionX } = authSlice.actions;
export default authSlice.reducer;
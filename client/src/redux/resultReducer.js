import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultActions: (state, action) => {
      state.result.push(action.payload);
    },
  },
});

export const { setUserId, pushResultActions } = resultReducer.actions;
export default resultReducer.reducer;

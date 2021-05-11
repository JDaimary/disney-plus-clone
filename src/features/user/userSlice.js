import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserSignIn: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setUserSignOut: (state) => {
      state.name = null;
      state.email = null;
    },
  },
});

export const { setUserSignIn, setUserSignOut } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;

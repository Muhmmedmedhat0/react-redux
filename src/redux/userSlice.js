import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Muhmmed",
      email: "muhmmedmedhat0@gmail.com",
    },
    pending: false,
    error: false,
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
    addHelloToName: (state, action) => {
      state.name = `Hello ${action.payload.name}`
    }
  },
});

export const { update, remove, addHelloToName } = userSlice.actions;

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: null,
    firstName: null,
    lastName: null,
    Username: null,
    image: null,
    password: null,
    Gender: null,
    loggedin: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.id = payload.id;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.Username = payload.Username;
      state.image = payload.image;
      state.password = payload.password;
      state.Gender = payload.Gender;
      state.loggedin = payload.loggedin;
    },
    logout: (state) => {
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.Username = null;
      state.image = null;
      state.password = null;
      state.Gender = null;
      state.loggedin = false;
    },
    register: () => {},
  },
});
export default userSlice.reducer;
export const { login, logout, register } = userSlice.actions;

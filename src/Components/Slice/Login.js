import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userNameError: false,
  PasswordError: false,
  loader: false,
  formErrors: {},
  isSubmit: false,
  formValues: { username: "", password: "" },
};

export const SignInSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    nameErrorAction: (state, action) => {
      state.userNameError = action.payload;
    },
    PasswordErrorAction: (state, action) => {
      state.PasswordError = action.payload;
    },

    loaderAction: (state, action) => {
      state.loader = action.payload;
    },
    isSubmitAction: (state, action) => {
      state.isSubmit = action.payload;
    },
    formErrorsAction: (state, action) => {
      state.formErrors = action.payload;
    },
    formValuesAction: (state, action) => {
      state.formValues = action.payload;
    },
  },
});

export const {
  nameErrorAction,
  PasswordErrorAction,
  loaderAction,
  isSubmitAction,
  formErrorsAction,
  formValuesAction,
} = SignInSlice.actions;

export default SignInSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../service/auth.service";
import { AppDispatch } from "../store";

interface IAuth {
  state: "LOADING" | "INACTIVE" | "FAIL";
  token: string | null,
  userId: string | null,
}

const initialState: IAuth = {
  state: "INACTIVE",
  token: null,
  userId: null,
};

export const signUpAsync = createAsyncThunk(
  "auth/signup",
  ({ email, password }: { email: string, password: string }) => {
    const result = AuthService.signup(email, password);
    return result;
  }
);

export const signInAsync = createAsyncThunk(
  "auth/signin",
  ({ email, password }: { email: string, password: string }) => {
    const result = AuthService.signin(email, password);
    return result;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: () => initialState,
  },
  extraReducers: (builder) => {
    /* ---- SING UP ---- */
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.state = "INACTIVE";
        state.token = action.payload?.token;
        state.userId = action.payload?.userId;
      })
      .addCase(signUpAsync.rejected, (state) => {
        state.state = "FAIL";
        state.token = null;
        state.userId = null;
      })

      /* ---- SING IN ---- */
      .addCase(signInAsync.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.state = "INACTIVE";
        state.token = action.payload?.token;
        state.userId = action.payload?.userId;
      })
      .addCase(signInAsync.rejected, (state) => {
        state.state = "FAIL";
        state.token = null;
        state.userId = null;
      })
  },
});

export const { signOut } = authSlice.actions;

export const signInFromApi = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(signInAsync({ email, password }));
};

export const signUpFromApi = (email: string, password: string) => (dispatch: AppDispatch) => {
  dispatch(signUpAsync({ email, password }));
};


export default authSlice.reducer;
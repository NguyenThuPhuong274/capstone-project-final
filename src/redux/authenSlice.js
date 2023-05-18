
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenServices } from "../services";
import { toast } from 'react-toastify';

export const signin = createAsyncThunk("signin", async (user) => {
  const response = await authenServices.signin(user);
  return response;
});

export const signup = createAsyncThunk("signup", async (user) => {
  const response = await authenServices.signup(user);
  return response;
});

export const forgotPassword = createAsyncThunk("forgot-password", async (email) => {
  const response = await authenServices.forgotPassword(email);
  return response;
});



const authenSlice = createSlice({
  name: "authen",
  initialState: {
    user: null,
    token: null,
    createAccountStatus: false,
  },
  reducers: {
    signOut: (state, action) => {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("token");
      localStorage.removeItem("currentPage");
    },
    resetCreateAccountStatus: (state, action) => {
      state.createAccountStatus = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      sessionStorage.setItem("token", accessToken);

      localStorage.setItem("currentPage", "Dashboard");

      console.log("login successfully", action.payload);
      toast.success("Đăng nhập thành công");
    }).addCase(signup.fulfilled, (state, action) => {
      if (action.payload.rowAffected === 1) {
        // const { user, accessToken } = action.payload;
        state.createAccountStatus = true;
        // state.token = accessToken;
      }
      toast.success("Tạo tài khoản thành công");
      console.log("create account successfully", action.payload);
    });
  },
});

export default authenSlice;

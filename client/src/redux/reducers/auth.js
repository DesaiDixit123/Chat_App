import { createSlice } from "@reduxjs/toolkit";
import { adminLogin, adminLogout, verifyAdmin } from "../thunks/admin";
import toast from "react-hot-toast";

const initialState = {
  user: null,
  isAdmin: false,
  loader: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userExits: (state, action) => {
      state.user = action.payload;
      state.loader = false;
    },
    userNotExits: (state) => {
      state.user = null;
      state.loader = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isAdmin = true;
        toast.success(action.payload);
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.isAdmin = false;
        toast.error(action.error.message);
      })
      .addCase(verifyAdmin.fulfilled, (state, action) => {
        if (action.payload) {
          state.isAdmin = true;
        } else {
          state.isAdmin = false;
        }
      })
      .addCase(verifyAdmin.rejected, (state) => {
        state.isAdmin = false;
      })
      .addCase(adminLogout.fulfilled, (state, action) => {
        state.isAdmin = false;

        toast.success(action.payload);
      })
      .addCase(adminLogout.rejected, (state, action) => {
        state.isAdmin = true;
        toast.error(action.payload);
      });
  },
});

export default authSlice;
export const { userExits, userNotExits } = authSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAtion";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    current: null,
    token: null,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(actions.getCurrent.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(actions.getCurrent.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store

      state.isLoading = false;
      state.current = action.payload;
      console.log("Payload: ", action.payload);
    });

    // Khi thực hiện action login thất bại (Promise rejected)
    builder.addCase(actions.getCurrent.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.current = null;

      // state.errorMessage = action.payload.message;
    });
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../service/authThunk";
const savedUser = sessionStorage.getItem("loginUser");
const initialState = {
    isLoggedIn: savedUser ? true : false,
    username: savedUser ? JSON.parse(savedUser).username : null,
    loading: false,
    error: null,
    result: 0,
};
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = null;
            state.result = 0;
            state.loading = false;
            state.error = null;
            sessionStorage.removeItem("loginUser");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.result = action.payload.result;

                if (action.payload.result === 0) {
                    state.isLoggedIn = true;
                    state.username = action.payload.username;

                    sessionStorage.setItem(
                        "loginUser",
                        JSON.stringify({ username: action.payload.username })
                    );
                } else {
                    state.isLoggedIn = false;
                    state.username = null;
                }
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(registerThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerThunk.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export default authSlice.reducer;
export const { logout } = authSlice.actions;
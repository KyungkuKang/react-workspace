import { createSlice } from "@reduxjs/toolkit";
import { getMemberListThunk, deleteMemberThunk, updateMemberThunk } from "../service/authThunk";

const initialState = {
    list: [],
    loading : false,
};

const memberSlice = createSlice({
    name:"member",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMemberListThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMemberListThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(getMemberListThunk.rejected, (state) => {
                state.loading = false;
            })
            .addCase(deleteMemberThunk.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    (user) => user.username !== action.payload
                );
            })
            .addCase(updateMemberThunk.fulfilled, (state, action) => {
                state.list = state.list.map((user) =>
                user.username === action.payload.username
                    ? action.payload
                    : user
            );
            });
    },
});

export default memberSlice.reducer;
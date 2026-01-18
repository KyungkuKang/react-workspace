import { createAsyncThunk } from "@reduxjs/toolkit";

let data_set = [
    { username: "aaa", password: "aaa", role: "USER"},
    { username: "bbb", password: "bbb", role: "USER"},
    { username: "ccc", password: "ccc", role: "USER"},
];

export const loginThunk = createAsyncThunk(
    "loginThunk",
    async (user) => {
        const data = data_set.filter(
            (data) => data.username === user.username
        )[0];

        let result = 1;

        if (data?.password === user.password){
            result = 0;
        }

        return { result, username: user.username };
    }
);
export const registerThunk = createAsyncThunk(
    "registerThunk",
    async (user) => {
        data_set.push({
            username: user.username,
            password: user.password,
            role: "USER",
        });
        return { result: 0 };
    }
);
export const getMemberListThunk = createAsyncThunk(
    "getMemberListThunk",
    async () => {
        return data_set;
    }
);
export const deleteMemberThunk = createAsyncThunk(
    "deleteMemberThunk",
    async (username) => {
        data_set = data_set.filter(
            (user) => user.username !== username
        );
        return username;
    }
);
export const updateMemberThunk = createAsyncThunk(
    "updateMemberThunk",
    async (updatedUser) => {
        data_set = data_set.map((user) =>
        user.username === updatedUser.username
            ? { ...user, ...updatedUser }
            : user
        );
        return updatedUser;
    }
);
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/login"
export const loginThunk = createAsyncThunk(
    "loginThunk",
    async ( user ) => {
        console.log("login thunk user : ", user)
        const res = await fetch( url, {
            method : "post",
            headers : {"Content-Type":"application/json"} ,
            body : JSON.stringify(user)
        } )
        return "돌려주는값";
    }
);
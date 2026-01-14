import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/"
export const memberThunk = createAsyncThunk(
    "memThunk",
    async ( path ) => {
        const res = await fetch( url + path , { method : "get"} );
        //console.log("thunk 실행");
        //throw new Error("서버 에러 발생")
        return await res.json();
    }
)
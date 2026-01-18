import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";
import authReducer from "./authSlice"
import memberReducer from "./memberSlice";
export const store = configureStore({
    reducer:{
        input: inputReducer,
        auth: authReducer,
        member: memberReducer,
    },
});
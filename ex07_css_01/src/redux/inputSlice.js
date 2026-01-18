import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    username : "",
    password : "",
}
const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
    },
});
export const { setUsername, setPassword } = inputSlice.actions;
export default inputSlice.reducer;
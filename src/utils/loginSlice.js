import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"user",
    initialState: {
       user: null,
    },
    reducers:{
        addUser(state, action) {
            state.user = action.payload;
        },
    }
})

export const {addUser} = loginSlice.actions
export default loginSlice.reducer
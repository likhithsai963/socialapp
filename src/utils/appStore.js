import { configureStore } from "@reduxjs/toolkit";
import userReducer from './loginSlice';

const appStore = configureStore({
    reducer:{
        user: userReducer
    }
})
export default appStore
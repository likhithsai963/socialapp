import { configureStore } from "@reduxjs/toolkit";
import userReducer from './loginSlice';
import postReducer from './postSlice';

const appStore = configureStore({
    reducer:{
        user: userReducer,
        posts: postReducer
    }
})
export default appStore
import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './movieSlice'
const store = configureStore({
    reducer:{
        MovieReducer
    }
})
export default store;

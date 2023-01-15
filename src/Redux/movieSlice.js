import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const MovieSlice = createSlice({
    name:'movie',
    initialState : {movies:data},
    reducers : {
    
    }
})
export default MovieSlice.reducer;
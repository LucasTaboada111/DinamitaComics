import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'

export const getComics = createAsyncThunk("GET_COMICS",()=>{
    return axios.get("/api/comics")
    .then((comics)=>{
        return comics.data
    })
    .catch((err) => console.log(err, "Falló GET_COMICS"))
})

const comicsReducer = createReducer([],{
    [getComics.fulfilled]: (state, action) => action.payload, 
})

export default comicsReducer;
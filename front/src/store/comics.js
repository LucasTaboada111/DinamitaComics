import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"



export const getComics = createAsyncThunk("GET_COMICS", () => {
  return axios.get("/api/comics").then(res => res.data)
})



const comicsReducer = createReducer([], {
  [getComics.fulfilled]: (state, action) => action.payload,
})

export default comicsReducer

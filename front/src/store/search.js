import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const setSearch = createAsyncThunk("SET_DATA_SEARCH", comicName => {
  return axios.post("/api/products/comicName", { comic: comicName }).then(res => res.data)
})

const searchReducer = createReducer([], {
  [setSearch.fulfilled]: (state, action) => action.payload
})
export default searchReducer

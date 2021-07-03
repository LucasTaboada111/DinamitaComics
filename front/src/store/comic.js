import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getComic = createAsyncThunk("GET_COMIC", id => {
  return axios.get(`/api/comics/${id}`).then(res => res.data)

  //  return axios.get(`/api/comics/${props.match.params.id}`).then(res => res.data)
})

const comicReducer = createReducer(
  {},
  {
    [getComic.fulfilled]: (state, action) => [state, action.payload]
  }
)

export default comicReducer

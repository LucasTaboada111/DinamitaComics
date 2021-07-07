import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getComics = createAsyncThunk("GET_COMICS", () => {
  return axios.get("/api/comics").then(res => res.data)
})
export const deleteComic = createAsyncThunk("DELETE_COMICS", id => {
  return axios.delete(`/api/comics/delete/${id}`).then(res => res.data)
})
export const updateComic = createAsyncThunk("UPDATE_COMICS", comic => {
  return axios.put(`/api/comics/${comic.id}`, comic).then(res => res.data)
})
const comicsReducer = createReducer([], {
  [getComics.fulfilled]: (state, action) => action.payload,
  [deleteComic.fulfilled]: (state, action) => action.payload,
  [updateComic.fulfilled]: (state, action) => action.payload
})

export default comicsReducer

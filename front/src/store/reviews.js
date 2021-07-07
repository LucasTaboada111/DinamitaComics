import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getReviews = createAsyncThunk("GET_REVIEWS", id => {
  return axios.get(`/api/review/${id}`).then(res => res.data)
})

const reviewsReducer = createReducer(
  {},
  {
    [getReviews.fulfilled]: (state, action) => action.payload
  }
)

export default reviewsReducer
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getDataCart = createAsyncThunk("GET_DATA_CART", () => {
  return axios.get(`/api/users/cart`).then(cart => cart.data)
})

export const setDataCart = createAsyncThunk("SET_DATA_CART", obj => {
  return axios
    .post("/api/orderDetails/addComic", obj)
    .then(response => response.data)
    .catch(err => console.log(err))
})

export const deleteDataCart = createAsyncThunk("DELETE_DATA_CART", ({ comicData, userId }) => {
  return axios.delete(`/api/orderDetails/deleteComic/${userId}/${comicData.id}`)
})

const cartReducer = createReducer(
  {},
  {
    [getDataCart.fulfilled]: (state, action) => action.payload,
    [setDataCart.fulfilled]: (state, action) => action.payload,
    [deleteDataCart.fulfilled]: (state, action) => action.payload
  }
)

export default cartReducer

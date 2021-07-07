import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getDataCart = createAsyncThunk("GET_CART", () => {
  return axios.get(`/api/users/cart`).then(cart => cart.data)
})

export const setDataCart = createAsyncThunk("SET_CART", obj => {
  return axios
    .post("http://localhost:3001/api/orderDetails/addComic", obj)
    .then(response => response.data)
    .catch(err => console.log(err))
})

const cartReducer = createReducer(
  {},
  {
    [getDataCart.fulfilled]: (state, action) => action.payload,
    [setDataCart.fulfilled]: (state, action) => action.payload
  }
)

export default cartReducer

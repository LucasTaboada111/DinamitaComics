import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

const getDataCart = createAsyncThunk ("GET_CART",()=>{
  return axios.get(`/api/cart`)
  .then(comics=>comics.data)
})


const cartReducer = createReducer ({}, {
  //  [getCartComic.fulfilled]: (state,action)=> action.payload

  //aqui mandar la data de todas las pelis que estaban en DataCart
})

export default cartReducer;
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

const getCartComic = createAsyncThunk("GET_CART_COMIC", comicId => {
  return axios.get(`/api/comics/${comicId}`).then(comic => comic.data)
})

// const getDataCart = createAsyncThunk ("GET_CART")

// add tocart ruta
// otro estado que me guarde las pelis con data completaaaa

const cartReducer = createReducer(
  {},
  {
    //  [getCartComic.fulfilled]: (state,action)=> action.payload
    // aqui mandar la data de todas las pelis que estaban en DataCart
  }
)

export default cartReducer

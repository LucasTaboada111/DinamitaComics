import {createAsyncThunk, createReducer} from "@reduxjs/toolkit"
import axios from "axios"

export const getDataCart = createAsyncThunk ("GET_DATA_CART",()=>{
  return axios.get(`/api/users/cart`)
  .then(cart=>cart.data)
})


export const setDataCart = createAsyncThunk ("SET_DATA_CART",(obj)=>{
//  console.log("soy el obj",obj)
return axios.post("http://localhost:3001/api/orderDetails/addComic",obj)
.then((response)=>response.data)
.catch(err=>console.log(err))
})

export const  deleteDataCart = createAsyncThunk ("DELETE_DATA_CART",({comicData,userId})=>{

  return axios.delete(`http://localhost:3001/api/orderDetails/deleteComic/${userId}/${comicData.id}`)
})

const cartReducer = createReducer(
  {},
  {
    //  [getCartComic.fulfilled]: (state,action)=> action.payload
    // aqui mandar la data de todas las pelis que estaban en DataCart
    [getDataCart.fulfilled]:(state,action)=>action.payload,
    [setDataCart.fulfilled]:(state,action)=>action.payload,
    [deleteDataCart.fulfilled]:(state,action)=>action.payload
  }
)

export default cartReducer

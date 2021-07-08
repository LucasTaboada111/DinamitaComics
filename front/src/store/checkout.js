import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import axios  from "axios"



export const  setCheckout =  createAsyncThunk("SET CHECKOUT",()=>{
    return axios.post("/api/order/buy").then((res)=>{
        return res.data
    })
})

export const getCheckout = createAsyncThunk ("GET_CHECKOUT",()=>{
    return axios.get ("/api/order/history")
    .then(orderList=>orderList.data)
})

const checkoutReducer = createReducer([],{
    [setCheckout.fulfilled] : (state,action) => action.payload,
    [getCheckout.fulfilled] : (state,action) => action.payload
})


export default checkoutReducer;
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"



export const getUsersForAdmin = createAsyncThunk("GET USERS",()=>{
    return axios.get("/api/admin/users").then((res)=>{
        return res.data
    })
})

export const setAdmin = createAsyncThunk("SETADMIN", (id)=>{
    return axios.put( `/api/admin/${id}`).then((res)=>{
        return res.data
    })
})



const adminUsersReducer = createReducer([],{
    [getUsersForAdmin.fulfilled] : (state,action) => action.payload,
    [setAdmin.fulfilled] : (state,action) => action.payload
})


export default adminUsersReducer;
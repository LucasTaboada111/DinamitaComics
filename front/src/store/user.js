import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit"
import axios from "axios"

export const userRegister = createAsyncThunk("userRegister", user => {
  return axios.post("/api/users/register", user).then(res => res.data)
})

export const userLogin = createAsyncThunk("userLogin", user => {
  return axios.post("/api/users/login", user).then(res => {
    alert("now you are login")
    return res.data
  })
  .catch((err)=>{
    alert("Las credenciales ingresadas son incorrectas")
  })
})

export const cookiesUser = createAction("cookiesUser", user => ({ payload: user }))

export const userLogout = createAsyncThunk("userLogout", () => {
  return axios.post("api/users/logout").then(res => {
    alert("now you are logout")
    return res.data
  })
})

export const getSingleUser = createAsyncThunk("GET_SINGLEUSER", () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: "/api/user"
  }).then(res => res.data)
})


const userReducer = createReducer(
  {},
  {
    [userLogin.rejected]:(state, action)=> action.payload,
    [userLogin.fulfilled]: (state, action) => action.payload,
    [getSingleUser.fulfilled]: (state, action) => [state, action.payload],
    [userLogout.fulfilled]: (state, action) => action.payload,
    [cookiesUser]: (state, action) => action.payload
  }
)

export default userReducer

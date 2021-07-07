import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit"
import axios from "axios"
import Swal from "sweetalert2"

export const userRegister = createAsyncThunk("userRegister", user => {
  return axios.post("/api/users/register", user).then(res => res.data)
})

export const userLogin = createAsyncThunk("userLogin", user => {
  return axios
    .post("/api/users/login", user)
    .then(res => {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Now you are login",
        timer: "1200"
      })
      return res.data
    })
    .catch(err => {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Your credentials are invalid! Try again",
        timer: "1200"
      })
    })
})

export const cookiesUser = createAction("cookiesUser", user => ({ payload: user }))

export const userLogout = createAsyncThunk("userLogout", () => {
  return axios.post("api/users/logout").then(res => {
    Swal.fire({
      icon: "success",
      text: "Goodbye!",
      timer: "1200"
    })
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
    [userLogin.rejected]: (state, action) => action.payload,
    [userLogin.fulfilled]: (state, action) => action.payload,
    [getSingleUser.fulfilled]: (state, action) => [state, action.payload],
    [userLogout.fulfilled]: (state, action) => action.payload,
    [cookiesUser]: (state, action) => action.payload
  }
)

export default userReducer

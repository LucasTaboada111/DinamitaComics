import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'

        //estas son rutas del backend del api


 //creamos USERS

export const postUser = createAsyncThunk('POST_USER', (user) => {


    return axios.post('/api/users/register', user)
    .then((res) => res.data)
    .catch((err) => console.log(err, "Falló postUser"))
})

//log User

export const loginUser = createAsyncThunk('LOGIN_USER', (user) => {

    return axios.post('http://localhost:3001/api/users/login', user)
    .then((res) => {
        const userLogeado = res.data[0]
    window.localStorage.setItem("user", JSON.stringify(userLogeado))
    alert(`Bienvenido ${res.data[0].name}`)
    },
)})

//Deslog User
export const logOutUser = createAsyncThunk('LOGOUT_USER', () => {


    return axios.post('api/users/logout')
    .then((res) => res.data)
    .catch((err) => (err, "fallo logout"))
})


export const getSingleUser = createAsyncThunk('GET_SINGLEUSER', () => {

    return axios({
        method:"GET",
        withCredentials:true,
        url:"/api/user"
    })
    .then((res) => res.data)
    .catch((err) => (err, "falló "))
})

const userReducer = createReducer([], {

    [loginUser.fulfilled]: (state, action) => [state, action.payload],

    [postUser]: (state, action) => [state, action.payload],

    [getSingleUser.fulfilled]: (state, action) => [state, action.payload],
    [logOutUser.fulfilled]: (state, action) => [state, action.payload],

})

export default userReducer





import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories = createAsyncThunk("GET_CATEGORIES", () => {
  return axios.get(`/api/categories`).then(res => res.data)
})
export const deleteCategory = createAsyncThunk("DELETE_CATEGORIES", id => {
  return axios.delete(`/api/categories/${id}`).then(res => {
    return res.data
  })
})
export const addCategory = createAsyncThunk("ADD_CATEGORIES", category => {
  return axios.post(`/api/categories`, category).then(res => {
    return res.data
  })
})
export const editCategory = createAsyncThunk("EDIT_CATEGORIES", data => {
  const { id, category } = data
  return axios.put(`/api/categories/${id}`, { category }).then(res => res.data)
})

const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
  [addCategory.fulfilled]: (state, action) => {
    state.push(action.payload)
  },
  [deleteCategory.fulfilled]: (state, action) => action.payload,
  [editCategory.fulfilled]: (state, action) => action.payload
})

// fijarse como hacer para no tener q hacer un findall despues de cada accion
// y manejarlo como el de add con un push ,etc.

export default categoriesReducer

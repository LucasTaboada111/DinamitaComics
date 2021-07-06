import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories = createAsyncThunk("GET_CATEGORIES", () => {
  return axios.get(`/api/categories`).then(res => res.data)
})
export const deleteCategory = createAsyncThunk("DELETE_CATEGORIES", id => {
  return axios.delete(`/api/categories/${id}`).then(res => {
    alert("eliminado")
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
  [getCategories.fulfilled]: (state, action) => action.payload
})

export default categoriesReducer

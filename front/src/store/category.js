import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"


export const setCategory = createAsyncThunk("SET_CATEGORY", () => {
    return axios.get("/api/products")
    .then(res => res.data)
})


const categoryReducer = createReducer([], {

    [setCategory.fulfilled]: (state, action) => action.payload

})

export default categoryReducer
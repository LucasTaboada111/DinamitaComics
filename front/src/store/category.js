import { createReducer, createAction } from "@reduxjs/toolkit"



/* export const setCategory = createAsyncThunk("SET_CATEGORY", (category) => {
    return axios.get(`/api/products/category/${category}`)
    .then(res => res.data)
}) */

export const setCategory = createAction("SET_CATEGORY");


const categoryReducer = createReducer([], {

  [setCategory]: (state, action) => action.payload,
  
});

export default categoryReducer;


/* 

const categoryReducer = createReducer([], {

    [setCategory.fulfilled]: (state, action) => action.payload

})

export default categoryReducer */

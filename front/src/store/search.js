import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setSearch = createAsyncThunk("SET_DATA_SEARCH", (comicName) => {
  console.log("soy comicName parametro", comicName);
  return axios.post("/api/products/comicName", comicName)
    .then((res) =>res.data);
});


const searchReducer = createReducer(
  [],
  {
    [setSearch.fulfilled]: (state, action) => action.payload,
  }
);
export default searchReducer;

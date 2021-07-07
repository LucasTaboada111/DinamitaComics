import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import comicsReducer from "./comics"
import cartReducer from "./cart"
import comicReducer from "./comic"
import categoryReducer from "./category"
import categorioesReducer from "./categories"
import searchReducer from "./search"

const store = configureStore({
  reducer: {
    user: userReducer,
    comics: comicsReducer,
    cart: cartReducer,
    comic: comicReducer,
    comicsFilter: categoryReducer,
    categories: categorioesReducer,
    search : searchReducer
  }
})

export default store

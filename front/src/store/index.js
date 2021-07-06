import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import comicsReducer from "./comics"
import cartReducer from "./cart"
import comicReducer from "./comic"
import categorioesReducer from "./categories"

const store = configureStore({
  reducer: {
    user: userReducer,
    comics: comicsReducer,
    cart: cartReducer,
    comic: comicReducer,
    categories: categorioesReducer
  }
})

export default store

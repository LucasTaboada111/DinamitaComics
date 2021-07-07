import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import comicsReducer from "./comics"
import cartReducer from "./cart"
import comicReducer from "./comic"
import categoryReducer from "./category"
import categorioesReducer from "./categories"
import reviewsReducer from "./reviews"
import searchReducer from "./search"
import adminUsersReducer from "./usersForAdmin"

const store = configureStore({
  reducer: {
    user: userReducer,
    comics: comicsReducer,
    cart: cartReducer,
    comic: comicReducer,
    categories: categorioesReducer,
    review: reviewsReducer,
    comicsFilter: categoryReducer,
    categories: categorioesReducer,
    search : searchReducer,
    usersForAdmin: adminUsersReducer,
  }
})

export default store

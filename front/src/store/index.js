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
import checkoutReducer from "./checkout"
import filterCatReducer from "./filterCategory"

const store = configureStore({
  reducer: {
    user: userReducer,
    comics: comicsReducer,
    cart: cartReducer,
    comic: comicReducer,
    categories: categorioesReducer,
    review: reviewsReducer,
    comicsFilter: categoryReducer,
    search : searchReducer,
    usersForAdmin: adminUsersReducer,
    checkout : checkoutReducer,
    filterCat: filterCatReducer,
  }
})

export default store

import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import userReducer from "./user"
import comicsReducer from "./comics"
import comicReducer from "./comic"

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger),

  reducer: {
    user: userReducer,
    comics: comicsReducer,
    comic: comicReducer
  }
})

export default store

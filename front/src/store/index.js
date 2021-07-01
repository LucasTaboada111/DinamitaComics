import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import userReducer from "./user"
import comicsReducer from "./comics"

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger),

  reducer: {
    user: userReducer,
    comics: comicsReducer
  }
})

export default store

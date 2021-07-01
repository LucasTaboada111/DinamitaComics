<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import userReducer from "./user"
=======
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user";
import comicsReducer from "./comics";

>>>>>>> fb9c5b8240a45b8fed929c59d0df961ca9aa5e9f

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(logger),

  reducer: {
<<<<<<< HEAD
    user: userReducer
  }
})

export default store
=======
    user: userReducer,
    comics: comicsReducer,
  },

});

export default store;
>>>>>>> fb9c5b8240a45b8fed929c59d0df961ca9aa5e9f

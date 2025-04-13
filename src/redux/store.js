import { configureStore } from "@reduxjs/toolkit";
import reducers from './slices'

export const store = configureStore({
  reducer: {
    user: reducers.userReducer,
    currentContext: reducers.currentContextReducer,
  },
})
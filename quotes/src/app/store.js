import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from "../features/quote/quoteApi"

export default configureStore({
  reducer: {
    quote: quoteReducer
  },
});
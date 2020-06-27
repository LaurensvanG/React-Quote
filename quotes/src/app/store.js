import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from "../components/quoteApiCall"

export default configureStore({
  reducer: {
    quote: quoteReducer
  },
});
import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import quoteReducer from "../components/quoteApiCall"
=======
import quoteReducer from "../features/quote/quoteApi"
>>>>>>> d609a51e07d676f62422afb00ffa1adc53a1d0e6

export default configureStore({
  reducer: {
    quote: quoteReducer
  },
});
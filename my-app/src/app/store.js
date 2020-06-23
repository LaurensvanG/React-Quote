import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from "../features/quote/quoteApi"
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    // counter: counterReducer,
    quote: quoteReducer
  },
});
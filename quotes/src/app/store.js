import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from "../components/quoteApiCall";
import changeTheme from "../components/changeTheme";

export default configureStore({
  reducer: {
    quote: quoteReducer,
    theme: changeTheme
  },
});
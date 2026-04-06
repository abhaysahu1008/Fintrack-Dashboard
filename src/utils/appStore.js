import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "../utils/roleSlice";
import transactionReducer from "../utils/transactionSlice";
import themeReducer from "../utils/themeSlice";

const store = configureStore({
  reducer: {
    role: roleReducer,
    transactions: transactionReducer,
    theme: themeReducer,
  },
});

export default store;

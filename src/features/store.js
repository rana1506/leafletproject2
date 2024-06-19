import { configureStore } from "@reduxjs/toolkit";
import shiplistReducer from "./shiplist/shiplistSlice";
export default configureStore({
  reducer: {
    ship: shiplistReducer,
  },
});

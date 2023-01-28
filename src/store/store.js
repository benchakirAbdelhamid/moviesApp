import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";

const store = configureStore({
  reducer: { movie: moviesSlice },
});
export default store;

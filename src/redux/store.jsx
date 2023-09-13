import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "./carsSlice";
// import { reducer } from './reducer.jsx';

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});

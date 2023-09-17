import { configureStore } from "@reduxjs/toolkit";
import { carApi } from "./services/carsSlice";

export const store = configureStore({
  reducer: {
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware),
});

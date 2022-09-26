import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import placeReducer from "./place.slice";
import categoriesReducer from "./categories.slice";
import productsReducer from "./products.slice";

export const store = configureStore({
  reducer: {
    places: placeReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

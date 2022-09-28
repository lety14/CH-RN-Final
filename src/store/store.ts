import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import placeReducer from "./slices/places.slice";
import categoriesReducer from "./slices/categories.slice";
import productsReducer from "./slices/products.slice";
import authReducer from "./slices/auth.slice";
import cartReducer from "./slices/cart.slice";
import ordersReducer from "./slices/order.slice";

export const store = configureStore({
  reducer: {
    places: placeReducer,
    categories: categoriesReducer,
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    orders: ordersReducer,
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

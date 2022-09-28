import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../types/IOrder.type";
import OrdersService from "../service/orders.service";
import { AppDispatch } from "../store";

interface ICart {
  state: "LOADING" | "INACTIVE" | "FAIL";
  orders: IOrder[];
}

const initialState: ICart = {
  state: "INACTIVE",
  orders: [],
};

export const getOrdersAsync = createAsyncThunk("orders/getOrders", () => {
  const result = OrdersService.getOrders();
  return result;
});

export const deleteOrdersAsync = createAsyncThunk("orders/deleteOrders", (id: string) => {
  OrdersService.deleteOrder(id);
  return id;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    cleanOrders: () => initialState,
  },
  extraReducers: (builder) => {
    /* --- GET ORDER --- */

    builder
      .addCase(getOrdersAsync.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(getOrdersAsync.fulfilled, (state, action) => {
        state.state = "INACTIVE";
        state.orders = action.payload;
      })
      .addCase(getOrdersAsync.rejected, (state) => {
        state.state = "FAIL";
      })

      /* --- DELETE ORDER --- */
      .addCase(deleteOrdersAsync.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(deleteOrdersAsync.fulfilled, (state, action) => {
        const orders = state.orders.filter((order) => order.id !== action.payload);

        state.state = "INACTIVE";
        state.orders = orders;
      })
      .addCase(deleteOrdersAsync.rejected, (state) => {
        state.state = "FAIL";
      });
  },
});

export const { cleanOrders } = ordersSlice.actions;

export const getOrdersFromApi = () => (dispatch: AppDispatch) => {
  dispatch(getOrdersAsync());
};

export const deleteOrdersFromApi = (id: string) => (dispatch: AppDispatch) => {
  dispatch(deleteOrdersAsync(id));
};

export default ordersSlice.reducer;

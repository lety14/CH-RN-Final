import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IItem from "../../types/IItem.type";
// import IItem from "../../types/IItem.type";
import { totalPrice } from "../../utils/totalItems";
import CartService from "../service/cart.service";
import { AppDispatch } from "../store";

interface ICart {
  state: "LOADING" | "INACTIVE" | "FAIL";
  items: IItem[] | [];
  total: number;
}

const initialState: ICart = {
  state: "INACTIVE",
  items: [],
  total: 0,
};

export const confirmCartAsync = createAsyncThunk(
  "cart/addOrder",
  ({ userId, items, total }: { userId: string; items: IItem[]; total: number }) => {
    const result = CartService.confirmCart(userId, items, total);
    return result;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleanCart: () => initialState,
    addItem: (state, action) => {
      let updatedCart = [];
      if (state.items.find((item) => item.id === action.payload.id)) {
        updatedCart = state.items.map((item) => {
          if (item.id === action.payload.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...action.payload, quantity: 1 };
        updatedCart = [...state.items, item];
      }

      state.items = updatedCart;
      state.total = totalPrice(updatedCart);
    },
    deleteItem: (state, action) => {
      const filterCart = state.items.filter((item) => item.id !== action.payload);

      state.items = filterCart;
      state.total = totalPrice(filterCart);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(confirmCartAsync.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(confirmCartAsync.fulfilled, (state, action) => {
        state.state = "INACTIVE";
        state.items = [];
        state.total = 0;
      })
      .addCase(confirmCartAsync.rejected, (state) => {
        state.state = "FAIL";
      });
  },
});

export const { addItem, deleteItem, cleanCart } = cartSlice.actions;

export const confirmCarFromApi =
  (userId: string, items: IItem[], total: number) => (dispatch: AppDispatch) => {
    dispatch(confirmCartAsync({ userId, items, total }));
  };

export default cartSlice.reducer;

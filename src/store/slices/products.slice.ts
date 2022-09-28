import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../constants/data/products.constants";
import IProduct from "../../types/IProduct.type";

interface IProducts {
  products: IProduct[];
  filteredProducts: IProduct[];
  selected?: IProduct;
}

const initialState: IProducts = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: () => {
      initialState;
    },
    filteredProducts: (state, action) => {
      return {
        ...state,
        filteredProducts: state.products.filter((product) => product.categoryId === action.payload),
      };
    },
    selectProduct: (state, action) => {
      const selected = state.products.find((products) => products.id === action.payload.id);

      return {
        ...state,
        selected: selected !== undefined ? selected : undefined,
      };
    },
  },
});

export const { getProducts, filteredProducts, selectProduct } = productsSlice.actions;

export default productsSlice.reducer;

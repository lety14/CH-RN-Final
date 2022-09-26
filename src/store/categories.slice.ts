import { createSlice } from "@reduxjs/toolkit";
import ICategory from "../types/ICategory.type";
import { CATEGORIES } from "../constants/data/categories.constants";

interface ICategories {
  categories: ICategory[];
  selected: null | ICategory;
}

const initialState: ICategories = {
  categories: CATEGORIES,
  selected: null,

};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getCategories: () => {
      initialState
    },
    selectCategory: (state,action) => {
      const selected = state.categories.find((categories) => categories.id === action.payload.id);
      
      return {
        ...state,
        selected: selected !== undefined ? selected : null,
      };
    },
  },
});

export const { getCategories, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
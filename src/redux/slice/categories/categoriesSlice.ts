import { createSlice } from '@reduxjs/toolkit';
const category = 'category';

export interface CategoryResponse { }
interface CategoryState {
  categories: any;
  isLoading: boolean;
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: category,
  initialState,
  reducers: {
    setCategoryRequest: (state) => {
      state.isLoading = true;
    },
    getCategoryRes: (state, action) => {
      const data = action.payload.data;
      console.log('Category PAYLOAD:', data, action.payload)
      state.categories = data;
      state.isLoading = false;
    },
    getCategoryErr: (state, action) => {
      const data = action.payload.data;
      state.categories = data;
      state.isLoading = false;
    },
  },
});

export const {
  setCategoryRequest,
  getCategoryRes,
  getCategoryErr
} = categoriesSlice.actions;
export default categoriesSlice.reducer;

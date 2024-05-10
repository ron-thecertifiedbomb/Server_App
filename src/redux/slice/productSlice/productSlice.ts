// store/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const product = 'product';
export interface productInterface {
  // product response property checking here...
}

interface TodoState {
  data: [];
  isLoading: boolean;
  selectedVariant: null;
}

const initialState: TodoState = {
  data: [],
  isLoading: false,
  selectedVariant: null,
};

const productSlice = createSlice({
  name: product,
  initialState,
  reducers: {
    setProductRequest: (state, action: PayloadAction<[]>) => {
      console.log('setProductRequest', action);
      state.data = action.payload;
      state.isLoading = true;
    },
    getProductRes: (state, action) => {
      console.log('getProductRes', action);
      state.data = action.payload;
      state.isLoading = false;
    },
    getProductErr: (state, action) => {
      console.log('getProductErr', action);
      state.data = action.payload;
      state.isLoading = false;
    },
    setSelectedVariant: (state, action) => {
      console.log('selected variant', state, action);
      state.selectedVariant = action.payload;
    },
  },
});

export const { setProductRequest, getProductRes, getProductErr, setSelectedVariant } =
  productSlice.actions;
export default productSlice.reducer;

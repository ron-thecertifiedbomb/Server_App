import { createSlice } from '@reduxjs/toolkit';

const productCountSlice = createSlice({
  name: 'productCount',
  initialState: 0, 

  reducers: {
    setProductCount: (state, action) => {
      return action.payload; 
    },
  },
});

export const { setProductCount } = productCountSlice.actions;
export default productCountSlice.reducer;

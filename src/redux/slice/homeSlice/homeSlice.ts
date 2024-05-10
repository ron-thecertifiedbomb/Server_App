// store/homeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const home = 'home';
export interface homeInterface {
  // home response property checking here...
}

interface HomeState {
  data: [];
  isLoading: boolean;
}

const initialState: HomeState = {
  data: [],
  isLoading: false,
};

const homeSlice = createSlice({
  name: home,
  initialState,
  reducers: {
    setHomeRequest: (state) => {
      state.isLoading = true;
    },
    getHomeRes: (state, action) => {
      // TEMPORARY SORTING
      let temp_sorting = [
        'Liquor and Tobacco',
        'Pharmacy',
        'Health and Beauty',
        'Home and Living',
        'Appliances and Gadgets',
        'Bags and Travels',
        'Mother and Baby',
      ];
      let temp_categories: any = [];


      console.log('HOMEEEEE', action.payload)
      action.payload.data.categories.map((item: any) => {
        temp_categories[temp_sorting.indexOf(item.name)] = item;
      });

      state.data = {
        ...action.payload.data,
        categories: temp_categories,
      };
      state.isLoading = false;
    },
    getHomeErr: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setHomeRequest, getHomeRes, getHomeErr } = homeSlice.actions;
export default homeSlice.reducer;

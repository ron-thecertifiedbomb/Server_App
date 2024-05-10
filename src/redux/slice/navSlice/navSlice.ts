// store/navSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const nav = 'nav';
export interface navInterface {
  // nav response property checking here...
}

interface NavState {
  recentSearch: Array<string>;
  searchKey: string;
  isLoading: boolean;
}

const initialState: NavState = {
  recentSearch: [],
  searchKey: '',
  isLoading: false,
};

const navSlice = createSlice({
  name: nav,
  initialState,
  reducers: {
    addRecentSearch: (state, action: PayloadAction<string>) => {
      let newRecentSearch = state.recentSearch;
      if (newRecentSearch.includes(action.payload)) {
        newRecentSearch.splice(newRecentSearch.indexOf(action.payload), 1);
      }
      newRecentSearch.unshift(action.payload);
      state.recentSearch = newRecentSearch;
    },
    updateSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
  },
});

export const { addRecentSearch, updateSearchKey } = navSlice.actions;
export default navSlice.reducer;

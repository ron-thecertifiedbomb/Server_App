import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const search = 'search';

export interface searchResponse { }
interface SearchState {
  searchList: any;
  isLoading: boolean;
  filteredData: any;
  onSaleCount: number;
  featuredCount: number;
  productCount: number;

  //checkbox states
  onSaleChecked: boolean;
  featuredChecked: boolean;
  categoryChecked: Record<string, { id: number; label: string }>;
  selectedSubcategories: Record<string, { id: number; label: string }>;
  selectedParentCategory: string | null;
  priceRangeChecked: Record<string, boolean>; // temporary
  sortCriteria: 'mostrated' | 'latest' | 'highprice' | 'lowprice' | '';

  //filter button state
  isFilterApplied: boolean;
}

const initialState: SearchState = {
  // ...initialCheckboxState,
  searchList: [],
  isLoading: false,
  filteredData: null,
  onSaleCount: 0,
  featuredCount: 0,
  productCount: 0,

  //checkbox states
  onSaleChecked: false,
  featuredChecked: false,
  categoryChecked: {},
  selectedParentCategory: null,
  selectedSubcategories: {},
  priceRangeChecked: {},
  sortCriteria: '', // Set the default sorting criteria

  //filter button state
  isFilterApplied: true,
};

const searchSlice = createSlice({
  name: search,
  initialState,
  reducers: {
    setSearchRequest: (state) => {
      state.isLoading = true;
    },
    getSearchRes: (state, action) => {
      const data = action.payload.data;
      const product = data?.product;
      const { featuredCount, onSaleCount, productCount } = data;
      console.log('PAYLOAD', product, data);
      state.searchList = product;
      state.isLoading = false;
      state.onSaleCount = onSaleCount;
      state.featuredCount = featuredCount;
      state.productCount = productCount;
      state.sortCriteria = '';
    },
    getSearchErr: (state, action) => {
      const data = action.payload.data;
      const product = data.product;
      const { featuredCount, onSaleCount, productCount } = data;
      state.searchList = product;
      state.isLoading = false;
      state.onSaleCount = onSaleCount;
      state.featuredCount = featuredCount;
      state.productCount = productCount;
      state.sortCriteria = '';
    },
    setFilteredData: (state, action: PayloadAction<any>) => {
      state.filteredData = action.payload;
      console.log('setFilteredData PAYLOAD', action.payload);
    },
    setOnSaleChecked: (state, action: PayloadAction<boolean>) => {
      state.onSaleChecked = action.payload;
    },
    setFeaturedChecked: (state, action: PayloadAction<boolean>) => {
      state.featuredChecked = action.payload;
    },
    setCategoryChecked: (
      state,
      action: PayloadAction<Record<string, { id: number; label: string }>>
    ) => {
      state.categoryChecked = action.payload;
    },
    setSelectedSubcategories: (
      state,
      action: PayloadAction<Record<string, { id: number; label: string }>>
    ) => {
      state.selectedSubcategories = action.payload;
    },
    setSelectedParentCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedParentCategory = action.payload;
    },
    setPriceRangeChecked: (state, action: PayloadAction<Record<string, boolean>>) => {
      state.priceRangeChecked = action.payload;
    },
    setSearchSortCriteria: (state, action: PayloadAction<'mostrated' | 'latest' | 'highprice' | 'lowprice' | ''>) => {
      state.sortCriteria = action.payload;
    },
    setClearSearch: (state) => {
      state.onSaleChecked = false;
      state.featuredChecked = false;
      state.categoryChecked = {};
      state.selectedParentCategory = null;
      state.selectedSubcategories = {};
      state.priceRangeChecked = {};
      state.sortCriteria = ''; // Set the default sorting criteria
      state.isFilterApplied = true;
    },
    setFilterButtonState: (state, action: PayloadAction<boolean>) => {
      state.isFilterApplied = action.payload;
    }
  },
});

export const {
  setSearchRequest,
  getSearchRes,
  getSearchErr,
  setFilteredData,

  setOnSaleChecked,
  setFeaturedChecked,
  setCategoryChecked,
  setSelectedParentCategory,
  setSelectedSubcategories,
  setPriceRangeChecked,
  setSearchSortCriteria,
  setClearSearch,
  setFilterButtonState,
} = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const setting = 'setting';

interface SettingSliceProps {
  policyResponse: {
    data: {};
    error: {};
  };
  isLoading: boolean;
}

const initialState: SettingSliceProps = {
  policyResponse: {
    data: {},
    error: {},
  },
  isLoading: false,
};

const settingSlice = createSlice({
  name: setting,
  initialState,
  reducers: {
    getPolicyRequest: (state, action) => {
      state.policyResponse.data = action.payload;
      state.policyResponse.error = {};
      state.isLoading = true;
    },
    setPolicyResponse: (state, action) => {
      state.policyResponse.data = action.payload;
      state.policyResponse.error = {};
      state.isLoading = false;
    },
    setPolicyError: (state, action) => {
      state.policyResponse.data = {};
      state.policyResponse.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getPolicyRequest, setPolicyError, setPolicyResponse } = settingSlice.actions;
export default settingSlice.reducer;

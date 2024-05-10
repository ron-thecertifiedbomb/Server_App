import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const OTP = 'OTP';

interface OTPSliceProps {
  data: {};
  error: {};
  isLoading: boolean;
}

const initialState: OTPSliceProps = {
  data: {},
  error: {},
  isLoading: false,
};

const OTPSlice = createSlice({
  name: OTP,
  initialState,
  reducers: {
    clearAllOTPData: (state) => {
      state.data = {};
      state.error = {};
    },
    postOTPRequest: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
      state.error = {};
      state.isLoading = true;
    },
    postResendOTPRequest: (state, action: PayloadAction<[]>) => {
      state.data = action.payload;
      state.error = {};
      state.isLoading = true;
    },
    setOTPData: (state, action) => {
      state.data = action.payload;
      state.error = {};
      state.isLoading = false;
    },
    setOTPErrorResponse: (state, action) => {
      state.data = {};
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  clearAllOTPData,
  postOTPRequest,
  postResendOTPRequest,
  setOTPData,
  setOTPErrorResponse,
} = OTPSlice.actions;
export default OTPSlice.reducer;

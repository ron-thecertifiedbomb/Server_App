import { createSlice } from '@reduxjs/toolkit';

const account = 'account';

interface AccountSliceProps {
  accountInfo: {};
}

const initialState: AccountSliceProps = {
  accountInfo: {},
};

const accountSlice = createSlice({
  name: account,
  initialState,
  reducers: {
    setAccountInfo: (state, action) => {
      state.accountInfo = action.payload;
    },
  },
});

export const { setAccountInfo } = accountSlice.actions;
export default accountSlice.reducer;

import { createSlice,PayloadAction } from '@reduxjs/toolkit';

const login = 'login';

interface LoginSliceProps {
  data: {};
  error: {};
  isLoading: boolean;
  loginResponse: {};
}

const initialState: LoginSliceProps = {
  data: {},
  error: {},
  isLoading: false,
  loginResponse: {},
};

const loginSlice = createSlice({
  name: login,
  initialState,
  reducers: {
    clearAllLoginData: (state) => {
      state.data = {};
      state.error = {};
      state.loginResponse = {};
    },
    postLoginRequest: (state, action: PayloadAction<[]>) => {
      state.data = {
        //@ts-ignore
        contact: action.payload.contact,
      };
      state.error = {};
      state.isLoading = true;
      state.loginResponse = {};
    },
    setLoginResponse: (state, action) => {
      state.error = {};
      state.isLoading = false;
      state.loginResponse = action.payload;
    },
    setLoginErrorResponse: (state, action) => {
      state.data = {};
      state.error = action;
      state.isLoading = false;
    }
  },
});

export const {
  clearAllLoginData,
  setLoginErrorResponse,
  postLoginRequest,
  setLoginResponse,
} = loginSlice.actions;
export default loginSlice.reducer;

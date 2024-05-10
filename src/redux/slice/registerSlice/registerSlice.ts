import { createSlice,PayloadAction } from '@reduxjs/toolkit';

const register = 'register';

interface RegisterSliceProps {
  data: {};
  error: {};
  isLoading: boolean;
  registerResponse: {};
}

const initialState: RegisterSliceProps = {
  data: {},
  error: {},
  isLoading: false,
  registerResponse: {},
};

const registerSlice = createSlice({
  name: register,
  initialState,
  reducers: {
    clearAllRegisterData: (state) => {
      state.data = {};
      state.error = {};
      state.registerResponse = {};
    },
    postRegisterRequest: (state, action: PayloadAction<[]>) => {
      state.data = {
        //@ts-ignore
        contact: action.payload.contact,
      };
      state.error = {};
      state.isLoading = true;
      state.registerResponse = {};
    },
    setRegisterResponse: (state, action) => {
      state.error = {};
      state.isLoading = false;
      state.registerResponse = action.payload;
    },
    setRegisterErrorResponse: (state, action) => {
      state.data = {};
      state.error = action;
      state.isLoading = false;
    },
  },
});

export const {
  clearAllRegisterData,
  postRegisterRequest,
  setRegisterErrorResponse,
  setRegisterResponse,
} = registerSlice.actions;
export default registerSlice.reducer;

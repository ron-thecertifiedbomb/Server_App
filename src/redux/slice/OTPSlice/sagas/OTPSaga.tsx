import { call, put, takeLatest } from 'redux-saga/effects';

import { store } from '@/redux/store';
import { App } from '@/services/index'; // Import the API service
import { JWT } from '@/shared/utilities/jwt';

import { setAccountInfo } from '../../accountSlice/accountSlice';
import { clearAllLoginData } from '../../loginSlice/loginSlice';
import { clearAllRegisterData } from '../../registerSlice/registerSlice';
import { setOTPData, setOTPErrorResponse } from '../OTPSlice';

function* fetchOTPVerifyRequest(action: any): any {
  try {
    // @ts-ignore
    const response = yield call(App.verifyApi, action.payload);
    const otpResponse: any = response.data;
    if (response.problem) {
      yield put(setOTPErrorResponse(response));
    } else {
      const { token } = response.data.data;
      const state = store.getState();
      const decodedToken = JWT.decode(token);

      yield put(clearAllLoginData());
      yield put(clearAllRegisterData());
      yield put(
        setAccountInfo({
          ...state.Account.accountInfo,
          ...response.data.data,
          ...decodedToken,
        })
      );
      yield put(setOTPData(otpResponse));
    }
  } catch (error: any) {
    yield put(setOTPErrorResponse(error.response));
  }
}

export function* watchOTPSaga() {
  yield takeLatest('OTP/postOTPRequest', fetchOTPVerifyRequest);
}

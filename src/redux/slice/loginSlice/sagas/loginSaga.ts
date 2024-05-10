import { call, put, takeLatest } from 'redux-saga/effects';

import { App } from '@/services/index'; // Import the API service

import { setAccountInfo } from '../../accountSlice/accountSlice';
import { setLoginErrorResponse, setLoginResponse } from '../loginSlice';

function* fetchLoginSaga(action: any): any {
  try {
    // @ts-ignore
    const response = yield call(App.loginApi, action.payload);
    const loginResponse: any = response.data;
    if (loginResponse.problem) {
      yield put(setLoginErrorResponse(loginResponse));
    } else {
      yield put(
        setAccountInfo({
          contact: action.payload.contact,
        })
      );
      yield put(setLoginResponse(response));
    }
  } catch (error: any) {
    yield put(setLoginErrorResponse(error.response));
  }
}

export function* watchLoginSaga() {
  yield takeLatest('login/postLoginRequest', fetchLoginSaga);
}

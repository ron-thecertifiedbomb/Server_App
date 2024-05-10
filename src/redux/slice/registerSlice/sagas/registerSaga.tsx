import { call, put, takeLatest } from 'redux-saga/effects';

import { App } from '@/services/index'; // Import the API service

import { setAccountInfo } from '../../accountSlice/accountSlice';
import { setRegisterErrorResponse, setRegisterResponse } from '../registerSlice';

function* fetchRegisterSaga(action: any): any {
  try {
    // @ts-ignore
    const response = yield call(App.registerApi, action.payload);
    const registerResponse: any = response.data;
    if (registerResponse.problem) {
      yield put(setRegisterErrorResponse(registerResponse));
    } else {
      yield put(
        setAccountInfo({
          contact: action.payload.contact,
        })
      );
      yield put(setRegisterResponse(response));
    }
  } catch (error: any) {
    yield put(setRegisterErrorResponse(error.response));
  }
}

export function* watchRegisterSaga() {
  yield takeLatest('register/postRegisterRequest', fetchRegisterSaga);
}

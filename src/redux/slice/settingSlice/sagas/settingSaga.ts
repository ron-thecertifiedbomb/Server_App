import { call, put, takeLatest } from 'redux-saga/effects';

import { App } from '@/services/index'; // Import the API service

import { setPolicyError, setPolicyResponse } from '../settingSlice';

// eslint-disable-next-line unused-imports/no-unused-vars
function* fetchPolicy(action: any): any {
  try {
    // @ts-ignore
    const response = yield call(App.appPolicyApi);
    const registerResponse: any = response.data;
    if (registerResponse.problem) {
      yield put(setPolicyError(registerResponse));
    } else {
      yield put(setPolicyResponse(response));
    }
  } catch (error: any) {
    yield put(setPolicyError(error.response));
  }
}

export function* watchSettingSaga() {
  yield takeLatest('setting/getPolicyRequest', fetchPolicy);
}

// store/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';

import { App } from '@/services/index'; // Import the API service

import { getSearchErr, getSearchRes } from '../searchSlice';

function* fetchSearchSaga(action: {}) {
  try {
    //@ts-ignore
    const response = yield call(App.searchApi, action.payload, {});
    const data: any = response.data;
    if (response.problem) {
      yield put(getSearchErr(response.problem));
    } else {
      yield put(getSearchRes(data));
    }
  } catch (error) {
    yield put(getSearchRes(error));
  }
}

export function* watchSearchSaga() {
  yield takeLatest('search/setSearchRequest', fetchSearchSaga);
}

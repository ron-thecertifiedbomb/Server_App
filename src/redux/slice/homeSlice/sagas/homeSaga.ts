// store/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';

import { getHomeErr, getHomeRes } from '@/redux/slice/homeSlice/homeSlice';
import { App } from '@/services/index'; // Import the API service

function* fetchHomeSaga(action: any): any {
  try {
    // @ts-ignore
    const response = yield call(App.homeApi, action.payload, {});
    const data: any = response.data;
    if (response.problem) {
      yield put(getHomeErr(response.problem));
    } else {
      yield put(getHomeRes(data));
    }
  } catch (error) {
    yield put(getHomeErr(error));
  }
}

export function* watchHomesaga() {
  yield takeLatest('home/setHomeRequest', fetchHomeSaga);
}

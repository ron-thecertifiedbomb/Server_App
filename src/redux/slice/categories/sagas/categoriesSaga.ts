// store/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';

import { App } from '@/services/index'; // Import the API service

import { getCategoryErr, getCategoryRes } from '../categoriesSlice';

function* fetchCategorySaga(action: {}) {
  try {
    //@ts-ignore
    const response = yield call(App.categoriesApi, action.payload, {});
    const data: any = response.data;
    if (response.problem) {
      yield put(getCategoryErr(response.problem));
    } else {
      yield put(getCategoryRes(data));
    }
  } catch (error) {
    yield put(getCategoryErr(error));
  }
}

export function* watchCategorySaga() {
  yield takeLatest('category/setCategoryRequest', fetchCategorySaga);
}

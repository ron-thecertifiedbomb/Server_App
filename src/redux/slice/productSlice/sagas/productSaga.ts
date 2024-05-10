// store/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';

import { getProductErr, getProductRes } from '@/redux/slice/productSlice/productSlice';
import { App } from '@/services/index'; // Import the API service

function* fetchProductSaga(action: any): any {
  try {
    // @ts-ignore
    const response = yield call(App.productDetailsApi, action.payload, {});
    const todos: any = response.data;
    yield put(getProductRes(todos));
    console.log('fetchProductSaga', action, response, todos);
    if (response.problem) {
      console.log('fetchProductSaga error here....', action, response, todos);
    } else {
      console.log('fetchProductSaga sucess here....', action, response, todos);
    }
  } catch (error) {
    yield put(getProductErr(error));
  }
}

export function* watchProductsaga() {
  yield takeLatest('product/setProductRequest', fetchProductSaga);
}

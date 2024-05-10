import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//@ts-ignore
import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';

import accountReducer from './accountSlice/accountSlice';
import CategoryReducer from './categories/categoriesSlice'
import { watchCategorySaga } from './categories/sagas/categoriesSaga';
/** slices */
import homeReducer from './homeSlice/homeSlice';
/** sagas */
import { watchHomesaga } from './homeSlice/sagas/homeSaga';
import loginReducer from './loginSlice/loginSlice';
import { watchLoginSaga } from './loginSlice/sagas/loginSaga';
import navReducer from './navSlice/navSlice';
import OTPReducer from './OTPSlice/OTPSlice';
import { watchOTPSaga } from './OTPSlice/sagas/OTPSaga';
import productReducer from './productSlice/productSlice';
import { watchProductsaga } from './productSlice/sagas/productSaga';
import registerReducer from './registerSlice/registerSlice';
import { watchRegisterSaga } from './registerSlice/sagas/registerSaga';
import { watchSearchSaga } from './searchSlice/sagas/searchSaga';
import searchReducer from './searchSlice/searchSlice';
import { watchSettingSaga } from './settingSlice/sagas/settingSaga';
import settingReducer from './settingSlice/settingSlice';

//Persist configs
const loginPersistConfig = {
  key: 'login',
  storage: storage,
  blacklist: ['loginResponse'],
};

const registerPersistConfig = {
  key: 'register',
  storage: storage,
  blacklist: ['registerResponse'],
};

const accountPersistConfig = {
  key: 'account',
  storage: storage,
};

const searchPersistConfig = {
  key: 'search',
  storage: storage,
}

//Reducers
const rootReducer = combineReducers({
  Home: homeReducer,
  Product: productReducer,
  Account: persistReducer(accountPersistConfig, accountReducer),
  Login: persistReducer(loginPersistConfig, loginReducer),
  Register: persistReducer(registerPersistConfig, registerReducer),
  Nav: navReducer,
  Search: persistReducer(searchPersistConfig, searchReducer),
  Setting: settingReducer,
  OTP: OTPReducer,
  Category: CategoryReducer
});

function* rootSaga(): Generator {
  yield all([
    watchHomesaga(),
    watchProductsaga(),
    watchSearchSaga(),
    watchLoginSaga(),
    watchOTPSaga(),
    watchRegisterSaga(),
    watchSettingSaga(),
    watchCategorySaga()
  ]);
}

export { rootReducer, rootSaga };

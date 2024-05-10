import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, rootSaga } from '@/redux/slice';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };

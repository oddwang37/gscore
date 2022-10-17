import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  isRejectedWithValue,
  AsyncThunkAction,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './ducks';
import { logout } from './ducks/auth';

const persistConfig = {
  key: 'root',
  storage,
};
export const errorMiddleware: Middleware =
  (api: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: any): AnyAction => {
    if (isRejectedWithValue(action)) {
      if (action.payload.status === 401) {
        api.dispatch(logout());
      }
    }

    return next(action);
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

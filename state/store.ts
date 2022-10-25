import {
  configureStore,
  Middleware,
  MiddlewareArray,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  isRejectedWithValue,
  Action,
  ThunkAction,
  EnhancedStore,
  CombinedState,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import rootReducer from './ducks';
import { logout } from './ducks/auth';

const reducer: typeof rootReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
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

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorMiddleware),
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const wrapper = createWrapper(makeStore, { debug: true });

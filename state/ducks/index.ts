import { combineReducers } from 'redux';

import authReducer from './auth/slices';
import productsReducer from './products/slices';
import subscribesReducer from './subscribes/slices';
import codesReducer from './codes/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  subscribes: subscribesReducer,
  codes: codesReducer,
});

export default rootReducer;

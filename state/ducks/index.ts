import { combineReducers } from 'redux';

import authReducer from './auth/slices';
import productsReducer from './products/slices';
import subscribesReducer from './subscribes/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  subscribes: subscribesReducer,
});

export default rootReducer;

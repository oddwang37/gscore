import { combineReducers } from 'redux';

import authReducer from './auth/slices';
import productsReducer from './products/slices';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;

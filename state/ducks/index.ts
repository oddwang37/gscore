import { combineReducers } from 'redux';

import authReducer from './auth/slices';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

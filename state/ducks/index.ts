import { combineReducers } from 'redux';

import someReducer from './some/slices';

const rootReducer = combineReducers({
  some: someReducer,
});

export default rootReducer;

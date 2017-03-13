import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import ErrorReducer from './ErrorReducer';
import syncCounterReducer, {
  NAME as syncCounterName
} from '../features/CountersPage/SyncCounter/reducer';
import thunkCounterReducer, {
  NAME as thunkCounterName
} from '../features/CountersPage/ThunkCounter/reducer';

let reducersMap = {
  router: routerReducer,
  form: formReducer,
  errors: ErrorReducer
};

reducersMap[syncCounterName] = syncCounterReducer;
reducersMap[thunkCounterName] = thunkCounterReducer;

const rootReducer = combineReducers(reducersMap);

export default rootReducer;

import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createHistory();
const appRouterMiddleware = routerMiddleware(history);

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  appRouterMiddleware,
  ReduxThunk,
  sagaMiddleware
];

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;

export {
  history
}

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// css globals
import 'bootstrap/dist/css/bootstrap.css';
import '../style/style.css';

import AppRouter from './router';
import store, { history } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter history={history}/>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

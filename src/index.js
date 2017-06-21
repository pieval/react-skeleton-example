/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]*/

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/store';
import routes from './routes';
import Root from './Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const MOUNT_NODE = document.getElementById('root');

const render = (appRoutes) => {
  ReactDOM.render(
    <AppContainer>
      <Root store={store} history={history} routes={appRoutes} />
    </AppContainer>,
    MOUNT_NODE,
  );
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./routes', () => render(routes));
}

render(routes);

/* eslint import/no-extraneous-dependencies: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import apiErrorsMiddleware from '../middlewares/apiErrors';
import reducer from './modules/reducer';
import DevTools from '../containers/Devtools';

const middleware = [apiMiddleware, apiErrorsMiddleware, thunk, routerMiddleware(browserHistory)];

export default function configureStore(initialState) {
  let enhancer;
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
    enhancer = compose(
      applyMiddleware(...middleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
    );
  }
  const store = createStore(reducer, initialState, enhancer);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./modules/reducer', () =>
      store.replaceReducer(require('./modules/reducer').default), /* eslint global-require:0 */
    );
  }
  return store;
}

/* eslint "react/forbid-prop-types":0 */

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './containers/Devtools';

const Root = (props) => {
  const { store, routes, history } = props;
  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
          {routes()}
        </Router>
        { (process.env.NODE_ENV === 'development') ? <DevTools /> : null }
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.func.isRequired,
};

export default Root;

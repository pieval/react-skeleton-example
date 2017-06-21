import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import User from './containers/UserExample';

const routes = () =>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/user" component={User} />
  </Route>;

export default routes;

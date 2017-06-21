import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import user from './userExample';
import error from './error';

export default combineReducers({
  user,
  error,
  form: formReducer,
  routing: routerReducer,
});

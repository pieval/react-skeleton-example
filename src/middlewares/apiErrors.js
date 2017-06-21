import { setError } from '../redux/modules/error';

/**
Middleware to handle ina single place errors from the redux-api-middleware.
Let us dispatch other action (from store.dispatch) or make treatments about errors
Enhance this when we define what to do with errors.
Enhance if specific action for different response status.
Redirect or other action possible (think using meta field from FSA)
Wait and see if we can use this when adding redux-form and this errors.
*/

const apiPayload = ['ApiError'];
const internalPayload = ['RequestError', 'InternalError', 'InvalidRSAA'];
const globalPayload = apiPayload.concat(internalPayload);

export default store => next => (action) => {
  if (action.payload && action.payload.name && globalPayload.includes(action.payload.name) && action.error) {
    // API error
    if (action.payload && apiPayload.includes(action.payload.name)) {
      store.dispatch(setError(
        `API error : ${action.payload.status} ${(action.payload.response) ? action.payload.response.error : ''}`));
    }
    // Other errors
    if (action.payload && internalPayload.includes(action.payload.name)) {
      store.dispatch(setError(
        `Internal error : ${action.payload.name} ${action.payload.message} ${action.payload.validationErrors}`));
    }
  }
  return next(action);
};

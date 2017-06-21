 // Redux module implemented in ducks style : https://github.com/erikras/ducks-modular-redux
import { CALL_API } from 'redux-api-middleware';

// Actions
const SET_USER_NAME_SYNC = 'user/SET_USER_NAME_SYNC';
const SET_USER_NAME_ASYNC = 'user/SET_USER_NAME_ASYNC';
const SET_USER_NAME_API_CALL = 'user/SET_USER_NAME_API_CALL';
const SET_USER_NAME_API_SUCCESS = 'user/SET_USER_NAME_API_SUCCESS';
const SET_USER_NAME_API_FAIL = 'user/SET_USER_NAME_API_FAIL';
const SET_USER_NAME_FORM = 'user/SET_USER_NAME_FORM';

// Reducer
const initialState = {
  nameForSync: 'Michel',
  nameForAsync: 'Michel',
  isFetching: false,
  nameApi: '',
  nameForm: 'Michel',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER_NAME_SYNC : {
      return { ...state, nameForSync: action.payload };
    }
    case SET_USER_NAME_ASYNC : {
      return { ...state, nameForAsync: action.payload };
    }
    case SET_USER_NAME_API_CALL:
      return { ...state, isFetching: true };
    case SET_USER_NAME_API_SUCCESS : {
      return { ...state, nameApi: action.payload.results[0].name, isFetching: false };
    }
    case SET_USER_NAME_API_FAIL:
      return { ...state, isFetching: false };
    case SET_USER_NAME_FORM:
      return { ...state, nameForm: action.payload };
    default :
      return state;
  }
}

// Action creators

/*
Synchronized action, state update is immediatly updated according to action and reducer
*/
export function setUserNameSync(name) {
  return {
    type: SET_USER_NAME_SYNC,
    payload: name,
  };
}

/* Redux thunk middleware usage, let us return function instead of action directly
usable for Rest API call for example (using fetch)
but we have to manage manually all actions linked to an async call (EMIT, REQUEST, FAILURE for example)
*/
function setUserNameForAsyncCallAction(name) {
  return {
    type: SET_USER_NAME_ASYNC,
    payload: name,
  };
}
export function setUserNameAsync(name) {
  return (dispatch) => {
    setTimeout(() => { dispatch(setUserNameForAsyncCallAction(name)); }, 1500);
  };
}

/* https://randomapi.com/api/4eug50jf?key=1AC3-6EZB-56OT-DXD0 */
export function setUserNameApi() {
  return {
    [CALL_API]: {
      endpoint: 'https://randomapi.com/api/4eug50jf?key=1AC3-6EZB-56OT-DXD0',
      method: 'GET',
      types: [SET_USER_NAME_API_CALL, SET_USER_NAME_API_SUCCESS, SET_USER_NAME_API_FAIL],
    },
  };
}

function setUserNameFormAction(name) {
  return {
    type: SET_USER_NAME_FORM,
    payload: name,
  };
}

export function setUserNameForm(name) {
  return dispatch =>
    new Promise(
      resolve =>
        setTimeout(() => { resolve(dispatch(setUserNameFormAction(name))); }, 3000));
}

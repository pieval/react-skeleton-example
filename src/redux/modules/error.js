// Actions
export const SET_ERROR = 'error/SET_ERROR';
export const RESET_ERROR = 'error/RESET_ERROR';

// Reducer
const initialState = {
  message: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ERROR : {
      return { ...state, message: action.payload.message };
    }
    case RESET_ERROR : {
      return { ...state, message: '' };
    }
    default :
      return state;
  }
}

// Actions creators
export function setError(errorMsg) {
  return {
    type: SET_ERROR,
    payload: {
      message: errorMsg,
    },
  };
}

export function resetError() {
  return {
    type: RESET_ERROR,
  };
}

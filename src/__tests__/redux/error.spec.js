/* eslint no-undef: 0 */
import reducer, { SET_ERROR, RESET_ERROR, setError, resetError } from '../../redux/modules/error';

describe('errors actions', () => {
  it('should create an action to set an error', () => {
    const errorMsg = 'This is a test error';
    const expectedAction = {
      type: SET_ERROR,
      payload: {
        message: errorMsg,
      },
    };
    expect(setError(errorMsg)).toEqual(expectedAction);
  });
  it('should create an action to reset an error', () => {
    const expectedAction = {
      type: RESET_ERROR,
    };
    expect(resetError()).toEqual(expectedAction);
  });
});

describe('errors reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        message: '',
      },
    );
  });
  it('should return the previous state if no action', () => {
    expect(reducer({})).toEqual({});
  });
  it('should return the previous state if the action is not relevant', () => {
    expect(reducer({}, { type: 'other/NOT_RELEVANT' })).toEqual({});
  });
  it('should handle SET_ERROR', () => {
    expect(reducer({}, {
      type: SET_ERROR,
      payload: {
        message: 'This is a test error msg',
      },
    })).toEqual(
      {
        message: 'This is a test error msg',
      },
    );
  });
  it('Should handle RESET_ERROR', () => {
    expect(reducer({
      message: 'This is a test error msg',
    }, {
      type: RESET_ERROR,
    })).toEqual({
      message: '',
    });
  });
});

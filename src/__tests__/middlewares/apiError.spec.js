/* eslint no-undef: 0 */
import apiErrors from '../../middlewares/apiErrors';
import { SET_ERROR } from '../../redux/modules/error';

describe('api error middleware managment', () => {
  let store = null;
  const next = jest.fn();
  beforeEach(() => {
    store = {
      dispatch: jest.fn(),
    };
  });
  describe('Pass through this middleware without side effects', () => {
    it('should only pass action to next middleware if no error and no payload field', () => {
      const action = {
        type: 'NON API FSA ACTION',
      };
      apiErrors(store)(next)(action);
      expect(store.dispatch).not.toBeCalled();
      expect(next).toBeCalledWith(action);
    });
    it('should only pass action to next middleware if no payload', () => {
      const action = {
        type: 'NON API FSA ACTION',
        error: true,
      };
      apiErrors(store)(next)(action);
      expect(store.dispatch).not.toBeCalled();
      expect(next).toBeCalledWith(action);
    });
    it('should only pass action to next middleware if no payload name', () => {
      const action = {
        type: 'NON API FSA ACTION',
        error: true,
        payload: {},
      };
      apiErrors(store)(next)(action);
      expect(store.dispatch).not.toBeCalled();
      expect(next).toBeCalledWith(action);
    });
    it('should only pass action to next middleware if payload name not api-redux error', () => {
      const action = {
        type: 'NON API FSA ACTION',
        error: true,
        payload: { name: 'NOT API ERROR NAME' },
      };
      apiErrors(store)(next)(action);
      expect(store.dispatch).not.toBeCalled();
      expect(next).toBeCalledWith(action);
    });
  });
  describe('API Error managment', () => {
    it('should call dispatch with API error', () => {
      const action = {
        type: 'API FSA ACTION',
        error: true,
        payload: { name: 'ApiError', status: '403' },
      };
      apiErrors(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toBeCalledWith(expect.objectContaining({
        payload: {
          message: expect.stringContaining('API error'),
        },
        type: SET_ERROR,
      }));
      expect(next).toBeCalledWith(action);
    });
    it('should call dispatch with Internal error', () => {
      const action = {
        type: 'API FSA ACTION',
        error: true,
        payload: { name: 'RequestError' },
      };
      apiErrors(store)(next)(action);
      expect(store.dispatch).toHaveBeenCalledTimes(1);
      expect(store.dispatch).toBeCalledWith(expect.objectContaining({
        payload: {
          message: expect.stringContaining('Internal error'),
        },
        type: SET_ERROR,
      }));
      expect(next).toBeCalledWith(action);
    });
  });
});

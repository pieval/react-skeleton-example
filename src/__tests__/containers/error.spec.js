/* eslint no-undef: 0 */
import React from 'react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import ErrorContainer from '../../containers/Error';
import Error from '../../components/Error';
import { RESET_ERROR } from '../../redux/modules/error';

describe('<Error /> Redux container', () => {
  const initialState = {
    error: {
      message: 'This is a test error message',
    },
  };
  const store = configureStore()(initialState);
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ErrorContainer />
      </Provider>);
  });
  it('should has right props', () => {
    expect(wrapper.find(ErrorContainer)).toHaveLength(1);
    const component = wrapper.find(ErrorContainer).find(Error);
    expect(component).toBeDefined();
    expect(component.props().message).toEqual('This is a test error message');
    expect(component.props().onClose).toBeDefined();
  });
  it('should dispatch a Reset action on onClose', () => {
    const component = wrapper.find(ErrorContainer).find(Error);
    component.props().onClose();
    expect(store.getActions()).toHaveLength(1);
    const action = store.getActions()[0];
    expect(action).toEqual({ type: RESET_ERROR });
  });
});

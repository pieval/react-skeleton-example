/* eslint no-undef: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Root from '../Root';

describe('<Root />', () => {
  describe('Rendering', () => {
    const store = {
      name: 'TEST STORE',
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {},
    };
    const history = {
      name: 'TEST HISTORY',
    };

    it('should render with default props / SNAPSHOT TEST', () => {
      const root = shallow(
        <Root
          store={store}
          history={history}
          routes={() => { 'TEST_ROUTES'; }}
        />);
      expect(shallowToJson(root)).toMatchSnapshot();
    });
    it('should has a router and call the routes method to get routes', () => {
      const routes = jest.fn();
      const root = shallow(
        <Root
          store={store}
          history={history}
          routes={routes}
        />);
      expect(root.find(Provider)).toHaveLength(1);
      expect(root.find(Router)).toHaveLength(1);
      expect(routes).toHaveBeenCalledTimes(1);
    });
  });
});

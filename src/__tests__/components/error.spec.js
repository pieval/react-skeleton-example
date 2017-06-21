/* eslint no-undef: 0 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Error from '../../components/Error';

describe('<Error />', () => {
  describe('Rendering', () => {
    it('should render with default props / SNAPSHOT TEST', () => {
      const error = shallow(<Error message="Test error message" onClose={() => {}} />);
      expect(shallowToJson(error)).toMatchSnapshot();
    });
    it('should not render if message is empty', () => {
      const error = shallow(<Error message="" onClose={() => {}} />);
      expect(error.find('div .errorBox').exists()).toBeFalsy();
    });
  });
  describe('Close behavior', () => {
    let error;
    let onClose;

    beforeEach(() => {
      onClose = jest.fn();
      error = mount(<Error message="Test error message" onClose={onClose} />);
    });
    it('should has a onClose prop', () => {
      expect(error.props().onClose).toBeDefined();
      expect(error.props().onClose).toEqual(onClose);
    });
    it('should render a close button', () => {
      const button = error.find('button .closeButton');
      expect(button).toBeDefined();
    });
    it('should call onClose on close button click', () => {
      const button = error.find('button .closeButton');
      button.simulate('click');
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});

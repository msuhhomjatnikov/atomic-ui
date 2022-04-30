import React from 'react';
import { shallow } from 'enzyme';
import FullScreenModal from './FullScreenModal';
import { FullScreenModalContent } from './FullScreenModal';

describe('FullScreenModal', () => {
  const TestComponent = <div id="test">This is Test</div>;
  const onClickSpy = jest.fn();

  describe('showModal prop', () => {
    it('showModal prop is true', () => {
      const wrapper = shallow(<FullScreenModal showModal={true} />);
      expect(wrapper.exists('.visible')).toBe(true);
    });
    it('showModal prop is false', () => {
      const wrapper = shallow(<FullScreenModal showModal={false} />);
      expect(wrapper.exists('.visible')).toBe(false);
    });
  });

  describe('usePagination prop', () => {
    it('usePagination - true', () => {
      const wrapper = shallow(
        <FullScreenModal
          showModal={true}
          currentPage={0}
          onPageChange={onClickSpy}
          usePagination
        />,
      );
      expect(wrapper.find('.button-container').at(0).exists()).toEqual(true);
      expect(wrapper.find('.button-container').at(1).exists()).toEqual(true);
      expect(wrapper.find('.button-container').at(2).exists()).toEqual(true);
    });
  });

  describe('headerText prop', () => {
    it('headerText prop is passed', () => {
      const wrapper = shallow(<FullScreenModalContent headerText="header" />);
      expect(wrapper.find('.text-header').text()).toBe('header');
    });
    it('headerText prop not is passed', () => {
      const wrapper = shallow(<FullScreenModalContent />);
      expect(wrapper.find('.text-header').exists()).toEqual(false);
    });
  });

  describe('descriptionText prop', () => {
    it('descriptionText prop is passed', () => {
      const wrapper = shallow(<FullScreenModalContent descriptionText="description" />);
      expect(wrapper.find('.text-description').text()).toBe('description');
    });
    it('descriptionText prop not is passed', () => {
      const wrapper = shallow(<FullScreenModalContent />);
      expect(wrapper.find('.text-description').exists()).toEqual(false);
    });
  });

  describe('content prop', () => {
    it('content prop is passed', () => {
      const wrapper = shallow(<FullScreenModalContent>{TestComponent}</FullScreenModalContent>);
      expect(wrapper.find('div#test').text()).toBe('This is Test');
    });
    it('content prop not is passed', () => {
      const wrapper = shallow(<FullScreenModalContent />);
      expect(wrapper.find('div#test').exists()).toEqual(false);
    });
  });
});

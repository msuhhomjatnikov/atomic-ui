import React from 'react';
import { shallow } from 'enzyme';

import RadioButton from './RadioButton';
import { RADIO_BUTTON_SIZE } from '.';

describe('Radio Button', () => {
  describe('when className is passed', () => {
    it('renders informed className', () => {
      const wrapper = shallow(<RadioButton className="my-class" />);
      expect(wrapper.exists('.my-class')).toBe(true);
    });
  });

  describe('when disabled is true', () => {
    it('renders on disabled state', () => {
      const wrapper = shallow(<RadioButton disabled={true} />);
      expect(wrapper.find('input').prop('disabled')).toBe(true);
    });
  });

  describe('when checked is true', () => {
    it('renders the checked input', () => {
      const wrapper = shallow(<RadioButton checked={true} />);
      expect(wrapper.find('input').prop('checked')).toBe(true);
    });
  });

  describe('when label is passed', () => {
    it('renders the label', () => {
      const wrapper = shallow(<RadioButton label={'Label'} />);
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });

  describe('when size is MEDIUM', () => {
    it('renders a medium radio button', () => {
      const wrapper = shallow(<RadioButton size={RADIO_BUTTON_SIZE.MEDIUM} />);
      expect(wrapper.exists('.radio-btn--md')).toBe(true);
    });
  });

  describe('when size is SMALL', () => {
    it('renders a small radio button', () => {
      const wrapper = shallow(<RadioButton size={RADIO_BUTTON_SIZE.SMALL} />);
      expect(wrapper.exists('.radio-btn--sm')).toBe(true);
    });
  });

  describe('when checked', () => {
    it('it calls change handler', () => {
      const onChangeSpy = jest.fn();
      const wrapper = shallow(<RadioButton onChange={onChangeSpy} />);
      wrapper.find('input').simulate('change');
      expect(onChangeSpy).toHaveBeenCalled();
      expect(onChangeSpy).toHaveBeenCalledTimes(1);
    });
  });
});

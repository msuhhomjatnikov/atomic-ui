import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  describe('when id is passed', () => {
    it('renders with id', () => {
      const wrapper = shallow(<Checkbox id="my-id" />);
      expect(wrapper.exists('#my-id')).toBe(true);
    });
  });

  describe('when name is passed', () => {
    it('renders with name', () => {
      const wrapper = shallow(<Checkbox name="my-name" />);
      expect(wrapper.exists('[name="my-name"]')).toBe(true);
    });
  });

  describe('when checked is true', () => {
    it('renders checked state', () => {
      const wrapper = shallow(<Checkbox checked={true} id="input_id" />);
      expect(wrapper.find('#input_id').prop('checked')).toBe(true);
    });
  });

  describe('when checked is false', () => {
    it('renders unchecked state', () => {
      const wrapper = shallow(<Checkbox checked={false} id="input_id" />);
      expect(wrapper.find('#input_id').prop('checked')).toBe(false);
    });
  });

  describe('when indeterminate is true', () => {
    it('renders indeterminate state', () => {
      const wrapper = shallow(<Checkbox indeterminate={true} id="input_id" />);

      wrapper.find('.custom-control.custom-checkbox-input').forEach(function (elm) {
        expect(elm.hasClass('indeterminate')).toBe(true);
      });
    });
  });

  describe('when indeterminate is false', () => {
    it('renders indeterminate state', () => {
      const wrapper = shallow(<Checkbox indeterminate={false} checked={true} id="input_id" />);
      wrapper.find('.custom-control.custom-checkbox-input').forEach(function (elm) {
        expect(elm.hasClass('indeterminate')).toBe(false);
      });
    });
  });

  describe('when className is passed', () => {
    it('renders with className', () => {
      const wrapper = shallow(<Checkbox className="my-class" />);
      expect(wrapper.exists('.custom-control.custom-checkbox.my-class')).toBe(true);
    });
  });

  describe('onChange', () => {
    it('it calls handler with correct value', () => {
      const onChangeSpy = jest.fn();
      const wrapper = shallow(<Checkbox onChange={onChangeSpy} />);
      const event = { target: { checked: true } };
      wrapper.find('input').simulate('change', event);
      expect(onChangeSpy).toHaveBeenCalledWith({ target: { checked: true } });
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Switch from './Switch';

describe('Switch', () => {
  describe('when id is passed', () => {
    it('renders with id', () => {
      const wrapper = shallow(<Switch id="my-id" />);
      expect(wrapper.exists('#my-id')).toBe(true);
    });
  });

  describe('when name is passed', () => {
    it('renders with name', () => {
      const wrapper = shallow(<Switch name="my-name" />);
      expect(wrapper.exists('[name="my-name"]')).toBe(true);
    });
  });

  describe('when checked is true', () => {
    it('renders checked state', () => {
      const wrapper = shallow(<Switch checked={true} id="input_id" />);
      expect(wrapper.find('#input_id').prop('checked')).toBe(true);
    });
  });

  describe('when checked is false', () => {
    it('renders checked state', () => {
      const wrapper = shallow(<Switch checked={false} id="input_id" />);
      expect(wrapper.find('#input_id').prop('checked')).toBe(false);
    });
  });

  describe('when className is passed', () => {
    it('renders with className', () => {
      const wrapper = shallow(<Switch className="my-class" />);
      expect(wrapper.exists('.toogle-switch-container.my-class')).toBe(true);
    });
  });

  describe('when disabled is true', () => {
    it('renders on disabled state', () => {
      const wrapper = shallow(<Switch disabled={true} checked={true} id="input_id" />);
      expect(wrapper.exists('.toogle-switch-container.disabled')).toBe(true);
      expect(wrapper.find('#input_id').prop('disabled')).toBe(true);
      expect(wrapper.find('.toggle-switch-icon-on img').prop('src')).toBe('switch-on-disabled.svg');
    });
  });

  describe('when highlightChecked is true', () => {
    describe('when checked', () => {
      it('renders with highlight class', () => {
        const wrapper = shallow(
          <Switch checked={true} highlightChecked={true} label="Cool switch label" />,
        );
        expect(wrapper.exists('.switch-label.-highlight-checked')).toBe(true);
      });
    });
    describe('when not checked', () => {
      it('renders without highlight class', () => {
        const wrapper = shallow(<Switch highlightChecked={true} label="Cool switch label" />);
        expect(wrapper.exists('.switch-label.-highlight-checked')).toBe(false);
      });
    });
  });

  describe('when labelUnchecked is passed', () => {
    describe('when checked', () => {
      it('renders with normal label', () => {
        const wrapper = shallow(
          <Switch checked={true} labelUnchecked="Not checked" label="I'm Checked" />,
        );
        expect(wrapper.text()).toBe("I'm Checked");
      });
    });
    describe('when not checked', () => {
      it('renders with labelUnchecked', () => {
        const wrapper = shallow(
          <Switch checked={false} labelUnchecked="Not checked" label="I'm Checked" />,
        );
        expect(wrapper.text()).toBe('Not checked');
      });
    });
  });

  describe('onChange', () => {
    it('it calls handler with correct value', () => {
      const onChangeSpy = jest.fn();
      const wrapper = shallow(<Switch onChange={onChangeSpy} />);
      const event = { target: { checked: true } };
      wrapper.find('input').simulate('change', event);
      expect(onChangeSpy).toHaveBeenCalledWith(true);
    });
  });
});

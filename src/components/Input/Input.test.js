import React from 'react';
import { shallow } from 'enzyme';
import CurrencyInput from '../CurrencyInput';
import HelpTooltip from '../HelpTooltip';

import Input from './Input';

describe('Input', () => {
  describe('when type is empty', () => {
    it('renders with type as text', () => {
      const wrapper = shallow(<Input id="my-input-id" />);
      expect(wrapper.find('#my-input-id').prop('type')).toBe('text');
    });
  });

  describe('when type is number', () => {
    it('renders with type as number', () => {
      const wrapper = shallow(<Input id="my-input-id" type="number" />);
      expect(wrapper.find('#my-input-id').prop('type')).toBe('number');
    });
  });

  describe('when value is passed', () => {
    describe('and it is a normal input', () => {
      it('renders with value', () => {
        const wrapper = shallow(<Input id="my-input-id" value="Cool value!" />);
        expect(wrapper.find('#my-input-id').prop('value')).toBe('Cool value!');
      });
    });

    describe('and it is a currencyInput', () => {
      it('renders with value', () => {
        const wrapper = shallow(
          <Input id="my-input-id" value="Cool value!" currencyInput={true} />,
        );
        expect(wrapper.find(CurrencyInput).prop('value')).toBe('Cool value!');
        expect(wrapper.find('.form-group.has-value').exists()).toBe(true);
      });
    });
  });

  describe('when label and placeholder are passed', () => {
    it('renders with label', () => {
      const wrapper = shallow(
        <Input name="my-input" label="Nice Label" placeholder="Cool Placeholder" />,
      );
      expect(wrapper.exists('.-floating-label')).toBe(false);
      expect(wrapper.find('label').text()).toBe('Nice Label');
      expect(wrapper.find('input').prop('placeholder')).toBe('Cool Placeholder');
    });
  });

  describe('when only placeholder is passed', () => {
    it('renders with floating label', () => {
      const wrapper = shallow(<Input name="my-input" placeholder="Cool Placeholder" />);
      expect(wrapper.exists('.-floating-label')).toBe(true);
      expect(wrapper.find('label').text()).toBe('Cool Placeholder');
      expect(wrapper.find('input').prop('placeholder')).toBe('Cool Placeholder');
    });
  });

  describe('when error is passed', () => {
    describe('and it is a normal input', () => {
      it('renders error message', () => {
        const wrapper = shallow(
          <Input name="my-input" placeholder="Cool Placeholder" error="Error message" />,
        );
        expect(wrapper.find('.invalid-feedback').text()).toBe('Error message');
        expect(wrapper.find('input').prop('className').includes('is-invalid')).toBe(true);
      });
    });

    describe('and it is a currencyInput', () => {
      const wrapper = shallow(
        <Input
          name="my-input"
          placeholder="Cool Placeholder"
          error="Error message"
          currencyInput={true}
        />,
      );
      expect(wrapper.find('.invalid-feedback').text()).toBe('Error message');
      expect(wrapper.find(CurrencyInput).prop('className').includes('is-invalid')).toBe(true);
    });

    describe('with help message', () => {
      it('shows only error message', () => {
        const wrapper = shallow(
          <Input
            name="my-input"
            placeholder="Cool Placeholder"
            error="Error message"
            help="Help text"
          />,
        );
        expect(wrapper.exists('.input-help')).toBe(false);
      });
    });
  });

  describe('when help is passed', () => {
    it('renders help message', () => {
      const wrapper = shallow(
        <Input name="my-input" placeholder="Cool Placeholder" help="Help text" />,
      );
      expect(wrapper.exists('.input-help')).toBe(true);
      expect(wrapper.find('.input-help').text()).toBe('Help text');
    });
  });

  describe('when helpTooltip is passed', () => {
    it('renders with HelpTooltip component on label', () => {
      const wrapper = shallow(<Input label="Some Label" helpTooltip={'Cool tooltip text here'} />);
      expect(wrapper.find(HelpTooltip).prop('iconClassName')).toBe('input-help-tooltip-icon');
      expect(wrapper.find(HelpTooltip).prop('content')).toBe('Cool tooltip text here');
    });

    describe('with helpTooltipIconSrc', () => {
      it('renders with custom src on help icon', () => {
        const wrapper = shallow(
          <Input
            label="Some Label"
            helpTooltip={'Cool tooltip text here'}
            helpTooltipIconSrc={'random-fake-src.svg'}
          />,
        );
        expect(wrapper.find(HelpTooltip).prop('iconSrc')).toBe('random-fake-src.svg');
      });
    });
  });

  describe('optional prop', () => {
    describe('when optional is false', () => {
      it('does not render optional tag', () => {
        const wrapper = shallow(<Input label="Some Label" />);
        expect(wrapper.exists('.optional-tag')).toBe(false);
      });
    });

    describe('when optional is true', () => {
      it('does not render optional tag', () => {
        const wrapper = shallow(<Input label="Some Label" optional={true} />);
        expect(wrapper.exists('.optional-tag')).toBe(true);
        expect(wrapper.find('.optional-tag').text()).toBe('Optional');
      });
    });
  });

  describe('when currencyInput and floating label', () => {
    it('renders with CurrencyInput component with hasFloatingLabel prop', () => {
      const wrapper = shallow(<Input currencyInput={true} />);
      expect(wrapper.find(CurrencyInput).prop('hasFloatingLabel')).toBe(true);
    });
  });

  describe('when onChange is passed', () => {
    it('calls the change handler', () => {
      const onChangeMock = jest.fn();
      const event = {
        target: { value: 'the-value' },
      };
      const wrapper = shallow(<Input onChange={onChangeMock} />);
      wrapper.find('input').simulate('change', event);
      expect(onChangeMock).toBeCalledWith('the-value');
    });
  });

  describe('when it is a currenyInput', () => {
    it('calls the change handler', () => {
      const onChangeMock = jest.fn();
      const currencyOnChangeEvent = { formattedValue: '4.545 €', value: '4545', floatValue: 4545 };
      const wrapper = shallow(<Input onChange={onChangeMock} currencyInput={true} />);
      wrapper.find(CurrencyInput).prop('onChange')(currencyOnChangeEvent);
      expect(onChangeMock).toBeCalledWith(currencyOnChangeEvent);
    });
  });

  describe('when containerClassName is passed', () => {
    it('render container element with custom class', () => {
      const wrapper = shallow(<Input containerClassName="custom-container-class" />);
      expect(wrapper.exists('.form-group.custom-container-class')).toBe(true);
    });
  });
});

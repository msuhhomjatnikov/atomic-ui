import React from 'react';
import RadioButton from '../components/RadioButton';
import { RADIO_BUTTON_SIZE } from '../components/RadioButton/RadioButton';

export default {
  title: 'Atoms/RadioButton',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [RADIO_BUTTON_SIZE.MEDIUM, RADIO_BUTTON_SIZE.SMALL],
      },
    },
  },
};

const Template = (args) => <RadioButton {...args} />;

export const On = Template.bind({});
On.args = {
  label: 'Radio - On',
  id: 'radio',
  name: 'radio',
  value: 'radio',
  checked: true,
  disabled: false,
  size: RADIO_BUTTON_SIZE.MEDIUM,
  onChange: () => console.log('change'),
};

export const Off = Template.bind({});
Off.args = {
  ...On.args,
  checked: false,
  label: 'Radio - Off',
};

export const DisabledOn = Template.bind({});
DisabledOn.args = {
  ...On.args,
  checked: true,
  disabled: true,
  label: 'Radio disabled - On',
};

export const DisabledOff = Template.bind({});
DisabledOff.args = {
  ...On.args,
  checked: false,
  disabled: true,
  label: 'Radio disabled - Off',
};

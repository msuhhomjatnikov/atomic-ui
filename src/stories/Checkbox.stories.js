import React, { useRef } from 'react';
import { CHECKBOX_SIZE } from '../components/Checkbox/Checkbox';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Atoms/Checkbox',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [CHECKBOX_SIZE.MEDIUM, CHECKBOX_SIZE.SMALL],
      },
    },
  },
  decorators: [],
};

const Template = (args) => {
  const itemCheckbox = useRef(null);
  return <Checkbox ref={itemCheckbox} {...args} />;
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
  indeterminate: false,
  label: 'Checked',
  id: 'random-id-Checkbox',
  onClick: () => {},
  onChange: () => {},
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  ...Checked.args,
  disabled: true,
  label: 'Checked-disabled',
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  ...Checked.args,
  checked: false,
  label: 'Unchecked',
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  ...Checked.args,
  checked: false,
  disabled: true,
  label: 'Unchecked-disabled',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...Checked.args,
  checked: false,
  indeterminate: true,
  label: 'Indeterminate',
};

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  ...Checked.args,
  checked: false,
  disabled: true,
  indeterminate: true,
  label: 'Indeterminate-disabled',
};

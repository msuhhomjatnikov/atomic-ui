import React from 'react';
import Switch from '../components/Switch';

export default {
  title: 'Atoms/Switch',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: 'white' }],
    },
  },
  decorators: [],
};

const Template = (args) => <Switch {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  id: 'random-id-switch',
  checked: true,
  disabled: false,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  ...Checked.args,
  checked: false,
  disabled: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  ...Checked.args,
  disabled: true,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  ...Checked.args,
  checked: false,
  disabled: true,
};

export const WithLabelEnabled = Template.bind({});
WithLabelEnabled.args = {
  ...Checked.args,
  label: 'Checked',
  labelUnchecked: 'Not Checked',
};

export const WithLabelDisabled = Template.bind({});
WithLabelDisabled.args = {
  ...Checked.args,
  disabled: true,
  label: 'Checked',
  labelUnchecked: 'Not Checked',
};

export const WithHighlightLabel = Template.bind({});
WithHighlightLabel.args = {
  ...Checked.args,
  label: 'Checked',
  labelUnchecked: 'Not Checked',
  highlightChecked: true,
};

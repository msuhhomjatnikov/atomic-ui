import React, { useState } from 'react';
import BoltSrc from '../components/Input/story-assets/bolt.svg';

import Input from '../components/Input';

const CONTAINER_STYLE = {
  marginTop: '50px',
  marginLeft: '50px',
  maxWidth: '450px',
};

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    label: { control: 'text' },
    error: { control: 'text' },
    help: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={CONTAINER_STYLE}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue?.floatValue !== undefined ? newValue?.floatValue : newValue);
  };

  return <Input name="storybook-example-input" value={value} onChange={onChange} {...args} />;
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  placeholder: 'Placeholder...',
  help: 'Help text here...',
  error: '',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  ...WithLabel.args,
  label: '',
};

export const WithoutLabelNarrow = Template.bind({});
WithoutLabelNarrow.args = {
  ...WithoutLabel.args,
  narrow: true,
};

export const WithHelpTooltip = Template.bind({});
WithHelpTooltip.args = {
  ...WithLabel.args,
  helpTooltip: <span>Add some helpful text here.</span>,
};

export const WithCustomHelpTooltip = Template.bind({});
WithCustomHelpTooltip.args = {
  ...WithLabel.args,
  helpTooltip: <span>Add some helpful text here.</span>,
  helpTooltipIconSrc: BoltSrc,
  containerClassName: 'custom-class',
};

export const WithOptional = Template.bind({});
WithOptional.args = {
  ...WithLabel.args,
  optional: true,
};

export const TooltipAndOptional = Template.bind({});
TooltipAndOptional.args = {
  ...WithLabel.args,
  optional: true,
  helpTooltip: <span>Add some helpful text here.</span>,
};

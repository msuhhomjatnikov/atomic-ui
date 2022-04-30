import React from 'react';
import { Compass } from 'react-feather';
import SlackIconSrc from './story-assets/slack-icon-demo.svg';
import Banner, { BANNER_TYPE } from '../components/Banner';

const CONTAINER_STYLE = { maxWidth: '450px' };

export default {
  title: 'Atoms/Banner',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: 'white' }],
    },
  },
  decorators: [
    (Story) => (
      <div style={CONTAINER_STYLE}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Banner {...args} />;

export const Error = Template.bind({});
Error.args = {
  children: (
    <div>
      <div>Banner content</div>
      <div>Line 1</div>
      <div>Line 2</div>
      <div>Line 3</div>
    </div>
  ),
  type: BANNER_TYPE.ERROR,
  showIcon: true,
  iconTop: true,
  onClose: () => {
    alert('Close handler...');
  },
};

export const Warning = Template.bind({});
Warning.args = {
  ...Error.args,
  type: BANNER_TYPE.WARNING,
};

export const Success = Template.bind({});
Success.args = {
  ...Error.args,
  type: BANNER_TYPE.SUCCESS,
};

export const Info = Template.bind({});
Info.args = {
  ...Error.args,
  type: BANNER_TYPE.INFO,
};

export const Gray = Template.bind({});
Gray.args = {
  ...Error.args,
  type: BANNER_TYPE.GRAY,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  ...Error.args,
  showIcon: false,
  onClose: undefined,
};

export const Inline = Template.bind({});
Inline.args = {
  ...Error.args,
  children: undefined,
  message: 'Inline banner content',
  inline: true,
  showIcon: true,
  onClose: undefined,
};

export const InlineWithoutIcon = Template.bind({});
InlineWithoutIcon.args = {
  ...Error.args,
  children: undefined,
  message: 'Inline banner without icon content',
  inline: true,
  showIcon: false,
  onClose: undefined,
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  ...Error.args,
  type: BANNER_TYPE.GRAY,
  onClose: () => alert('on close handler!'),
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  ...Error.args,
  type: BANNER_TYPE.GRAY,
  icon: <Compass size={16} className="banner-icon" />,
};

export const CustomIconTop = Template.bind({});
CustomIconTop.args = {
  ...Error.args,
  type: BANNER_TYPE.GRAY,
  icon: <Compass size={16} className="banner-icon icon-top" />,
};

export const CustomIconSrc = Template.bind({});
CustomIconSrc.args = {
  ...Error.args,
  type: BANNER_TYPE.GRAY,
  iconSrc: SlackIconSrc,
};

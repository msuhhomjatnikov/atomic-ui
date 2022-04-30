import React from 'react';
import StatusBadge from '../components/StatusBadge';
import { STATUS_BADGE_COLOR, STATUS_BADGE_ICON } from '../components/StatusBadge';
import { ReactComponent as SlackIcon } from './story-assets/slack-icon-demo.svg';

export default {
  title: 'Atoms/StatusBadge',
  decorators: [],
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: Object.keys(STATUS_BADGE_COLOR),
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(STATUS_BADGE_ICON),
      },
    },
  },
};

const Template = (args) => <StatusBadge {...args} />;

export const CheckCircle = Template.bind({});
CheckCircle.args = {
  text: 'Success',
  color: STATUS_BADGE_COLOR.GREEN,
  icon: STATUS_BADGE_ICON.CHECK_CIRCLE,
};

export const XCircle = Template.bind({});
XCircle.args = {
  text: 'Failure',
  color: STATUS_BADGE_COLOR.RED,
  icon: STATUS_BADGE_ICON.X_CIRCLE,
};

export const Bolt = Template.bind({});
Bolt.args = {
  text: 'Extracted',
  color: STATUS_BADGE_COLOR.BLUE,
  icon: STATUS_BADGE_ICON.BOLT,
};

export const Clock = Template.bind({});
Clock.args = {
  text: 'Pending',
  color: STATUS_BADGE_COLOR.PURPLE,
  icon: STATUS_BADGE_ICON.CLOCK,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  text: 'Custom',
  color: STATUS_BADGE_COLOR.PURPLE,
  customIcon: SlackIcon,
};

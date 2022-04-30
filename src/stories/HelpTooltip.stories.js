import React from 'react';
import HelpTooltip from '../components/HelpTooltip';
import Slack from './story-assets/slack-icon-demo.svg';

export default {
    title: 'Atoms/HelpTooltip',
    decorators: [],
};

const Template = (args) => <HelpTooltip {...args} />;

export const TooltipDefault = Template.bind({});
TooltipDefault.args = {
    iconClassName: '',
    content: 'This is help tooltip',
    iconSrc: undefined
};

export const TooltipCustomIcon = Template.bind({});
TooltipCustomIcon.args = {
    iconClassName: '',
    content: 'This is help tooltip',
    iconSrc: Slack
};

import React from 'react';
import HelpTooltip from '../components/HelpTooltip';
import Slack from './story-assets/slack-icon-demo.svg';

export default {
    title: 'Atoms/HelpTooltip',
    argTypes: {
        content: { control: 'text' },
        iconSrc: { control: 'text' },
        iconClassName: { control: 'text' },
    },
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

import React from 'react';

import ActionToast from '../components/ActionToast';

export default {
    title: 'Atoms/ActionToast',
};

const Template = (args) => <ActionToast {...args} />;

export const Complete = Template.bind({});
Complete.args = {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    buttons: [
        {
            key: 'btn_1_key',
            label: 'Button 1',
            handler: () => window.alert('Button 1 handler'),
        },
        {
            key: 'btn_2_key',
            label: 'Button 2',
            handler: () => window.alert('Button 2 handler'),
        },
    ],
    onClose: () => window.alert('Close handler...'),
};

export const ButtonsWithoutClose = Template.bind({});
ButtonsWithoutClose.args = {
    ...Complete.args,
    onClose: undefined,
};

export const Message = Template.bind({});
Message.args = {
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

export const MessageWithClose = Template.bind({});
MessageWithClose.args = {
    ...Message.args,
    onClose: () => window.alert('Close handler...'),
};

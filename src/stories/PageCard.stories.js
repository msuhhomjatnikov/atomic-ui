import React from 'react';
import PageCard from '../components/PageCard';

const CONTAINER_STYLE = { maxWidth: '450px' };

export default {
    title: 'Atoms/Page Card',
    decorators: [
        (Story) => (
            <div style={CONTAINER_STYLE}>
                <Story />
            </div>
        ),
    ],
};

const Template = (args) => <PageCard {...args}>This is page card</PageCard>;

export const Card = Template.bind({});
Card.args = {};

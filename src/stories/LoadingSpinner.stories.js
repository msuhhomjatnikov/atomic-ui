import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
  title: 'Atoms/LoadingSpinner',
  decorators: [],
};

const Template = (args) => <LoadingSpinner {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = { size: '18px', borderWidth: '2px' };

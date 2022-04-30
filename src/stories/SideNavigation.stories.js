import React from 'react';
import SideNavigation from '../components/SideNavigation';
import { SIDE_NAVIGATION_STATE } from '../components/SideNavigation';

export default {
  title: 'Atoms/SideNavigation',
  component: SideNavigation,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

const CONTAINER_STYLE = {
  backgroundColor: '#fff',
  height: '100%',
  position: 'fixed',
  width: '100%',
  top: '0',
  left: '0',
  padding: '10px',
};

export const Default = (args) => {
  const sideNavOptions = [
    {
      label: 'Company details',
      state: SIDE_NAVIGATION_STATE.INCOMPLETE,
      value: 'COMPANY_DETAILS',
    },
    {
      label: 'Company leadership',
      state: SIDE_NAVIGATION_STATE.ERROR,
      value: 'COMPANY_LEADERSHIP',
    },
    {
      label: 'Financial information',
      state: SIDE_NAVIGATION_STATE.LOCKED,
      value: 'FINANCIAL_INFORMATION',
    },
    {
      label: 'Billing account',
      state: SIDE_NAVIGATION_STATE.COMPLETED,
      value: 'BILLING_ACCOUNT',
    },
    {
      label: 'Signature',
      state: SIDE_NAVIGATION_STATE.INCOMPLETE,
      value: 'SIGNATURE',
    },
  ];

  return (
    <div style={CONTAINER_STYLE}>
      <SideNavigation
        name="storybook-example-side-nav"
        onChangeValue={console.log}
        options={sideNavOptions}
        withIcon
        defaultValue={'SIGNATURE'}
        {...args}
      />
    </div>
  );
};

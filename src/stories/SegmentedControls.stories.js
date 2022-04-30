import React from 'react';
import SegmentedControls from '../components/SegmentedControls';
import {BUTTON_SIZE, BUTTON_TYPE} from "../components/Button";

export default {
  title: 'Atoms/SegmentedControls',
  component: SegmentedControls,
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

export const Template = (args) => {
  const options = [
    { label: '1-10', value: '1-10' },
    { label: '11-50', value: '11-50' },
    { label: '51-100', value: '51-100' },
    { label: '100+', value: '100+' },
  ];

  const companyAgeOptions = [
    {
      label: '<3 months',
      value: 'UNDER-3-MONTHS',
    },
    {
      label: '3 months to 3 years',
      value: '3-MONTHS-TO-3-YEARS',
    },
    {
      label: '>3 years',
      value: 'MORE-THAN-3-YEARS',
    },
  ];

  return (
    <div style={CONTAINER_STYLE}>
      <SegmentedControls
        name="storybook-example-segmented-controls"
        onChange={console.log}
        label="Add the minimum width that you want to avoid truncating the text too early"
        options={companyAgeOptions}
        {...args}
      />

      <br />

      <SegmentedControls
        name="storybook-example-segmented-controls"
        onChange={console.log}
        label="Alternatively, add a grid breakpoint to have the component stack"
        options={options}
        gridBreakpoint={720}
        {...args}
      />

      <br />

      <h5>(play with the window size to see changes)</h5>
    </div>
  );
};

import React, {useCallback, useState} from 'react';
import Chip from '../components/Chip';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export const Template = (args) => {
  const [isActive, setIsActive] = useState(false);

  const handleCheck = useCallback((bool) => {
      setIsActive(bool);
  }, []);

  return (
      <Chip
          name="storybook-example-chip"
          defaultValue="REVENUE"
          isActive={isActive}
          onChecked={handleCheck}
          onChange={console.log}
          label="Business Revenue"
          {...args}
      />
  );
};

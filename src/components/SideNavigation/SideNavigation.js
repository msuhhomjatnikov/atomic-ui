import React, { memo, useCallback, useEffect, useState } from 'react';
import { string, func, array, bool } from 'prop-types';
import { isNil } from 'ramda';

import SideNavOption from './components/SideNavOption';

import './SideNavigation.sass';

export const SIDE_NAVIGATION_STATE = {
  COMPLETED: 'COMPLETED',
  ERROR: 'ERROR',
  INCOMPLETE: 'INCOMPLETE',
  LOCKED: 'LOCKED',
};

const SideNavigation = memo(function SideNavigation({
  className,
  defaultValue,
  onChangeValue,
  options = [],
  value,
  withIcon,
}) {
  const [activeOption, setActiveOption] = useState(defaultValue ?? value);

  const isControlled = !isNil(value);

  const handleChangeValue = useCallback(
    (opt) => {
      if (onChangeValue) onChangeValue(opt.value);
      if (!isControlled) setActiveOption(opt.value);
    },
    [onChangeValue, isControlled],
  );

  useEffect(() => {
    if (isControlled) setActiveOption(value);
  }, [isControlled, value]);

  return (
    <div className={`side-nav ${className}`}>
      {options.map((opt) => (
        <SideNavOption
          key={opt.value}
          opt={opt}
          isActive={activeOption === opt.value}
          isReadOnly={opt.isReadOnly ?? false}
          withIcon={withIcon}
          onClick={opt.isReadOnly ? undefined : handleChangeValue}
        />
      ))}
    </div>
  );
});

SideNavigation.propTypes = {
  className: string,
  defaultValue: string,
  isLoading: bool,
  onClick: func,
  options: array,
  value: string,
  withIcon: bool,
};

export default SideNavigation;

import React, { memo, useCallback } from 'react';

import { SIDE_NAVIGATION_STATE } from '../SideNavigation';
import SideNavIcon from './SideNavIcon';

const getButtonClassNames = (opt, isActive, isReadOnly) => {
  let btnClassNames = 'side-nav__button';
  if (isActive) btnClassNames += ' side-nav__button--active';
  if (isReadOnly) btnClassNames += ' side-nav__button--is-read-only';
  switch (opt.state) {
    case SIDE_NAVIGATION_STATE.COMPLETED:
      btnClassNames += ' side-nav__button--complete';
      break;
    case SIDE_NAVIGATION_STATE.ERROR:
      btnClassNames += ' side-nav__button--error';
      break;
    case SIDE_NAVIGATION_STATE.LOCKED:
      btnClassNames += ' side-nav__button--locked';
      break;
    case SIDE_NAVIGATION_STATE.INCOMPLETE:
    default:
      btnClassNames += ' side-nav__button--incomplete';
      break;
  }
  return btnClassNames;
};

const SideNavOption = memo(function SideNavOption({
  isActive,
  isReadOnly,
  onClick,
  opt,
  withIcon,
}) {
  const handleClick = useCallback(() => onClick(opt), [onClick, opt]);

  return (
    <button className={getButtonClassNames(opt, isActive, isReadOnly)} onClick={handleClick}>
      {opt.label}
      {withIcon && (
        <span className="side-nav__button__icon">
          <SideNavIcon state={opt.state} />
        </span>
      )}
    </button>
  );
});

export default SideNavOption;

import React, { memo } from 'react';
import * as Icon from 'react-feather';

import lockIcon from '../assets/lock.svg';
import { SIDE_NAVIGATION_STATE } from '../SideNavigation';

const SideNavIcon = memo(function SideNavIcon({ state }) {
  switch (state) {
    case SIDE_NAVIGATION_STATE.COMPLETED:
      return <Icon.Check size="14" />;
    case SIDE_NAVIGATION_STATE.ERROR:
      return <Icon.X size="14" />;
    case SIDE_NAVIGATION_STATE.LOCKED:
      return <img alt="" src={lockIcon} />;
    default:
      return null;
  }
});

export default SideNavIcon;

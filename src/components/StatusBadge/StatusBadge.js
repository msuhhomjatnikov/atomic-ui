import React, {memo, useCallback} from 'react';

import { ReactComponent as Bolt } from './assets/bolt.svg';
import { ReactComponent as Clock } from './assets/clock.svg';
import { ReactComponent as CheckCircle } from './assets/check-circle.svg';
import { ReactComponent as XCircle } from './assets/x-circle.svg';

import './StatusBadge.sass';
import * as PropTypes from "prop-types";

export const STATUS_BADGE_ICON = {
  CHECK_CIRCLE: 'CHECK_CIRCLE',
  X_CIRCLE: 'X_CIRCLE',
  BOLT: 'BOLT',
  CLOCK: 'CLOCK',
};

export const STATUS_BADGE_COLOR = {
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  RED: 'RED',
  ORANGE: 'ORANGE',
  PINK: 'PINK',
  PURPLE: 'PURPLE',
  YELLOW: 'YELLOW',
  GRAY: 'GRAY',
  UI_MOSS: 'UI_MOSS',
};

const ICON_DEFS = {
  CHECK_CIRCLE: {
    component: CheckCircle,
    className: 'check-circle',
  },
  X_CIRCLE: {
    component: XCircle,
    className: 'x-circle',
  },
  BOLT: {
    component: Bolt,
    className: 'bolt',
  },
  CLOCK: {
    component: Clock,
    className: 'clock',
  },
};

const COLOR_DEFS = {
  GREEN: {
    class: '-green',
  },
  BLUE: {
    class: '-blue',
  },
  RED: {
    class: '-red',
  },
  YELLOW: {
    class: '-yellow',
  },
  ORANGE: {
    class: '-orange',
  },
  PINK: {
    class: '-pink',
  },
  PURPLE: {
    class: '-purple',
  },
  GRAY: {
    class: '-gray',
  },
};

const StatusBadge = memo(function StatusBadge({
  text,
  color,
  icon,
  iconOnly = false,
  textOnly = false,
  customIcon,
}) {

  const renderIcon = useCallback(() => {
    if(customIcon && !textOnly) {
      return React.createElement(customIcon, {
        height: '12',
        className: 'user-custom-icon',
      })
    }
    if(!textOnly) {
      return React.createElement(ICON_DEFS[icon]?.component, {
        height: '12',
        className: ICON_DEFS[icon]?.className,
      })
    }
  }, [customIcon, textOnly]);

  return (
    <span
      className={`status-badge ${COLOR_DEFS[color].class} ${iconOnly ? '-icon-only' : ''} ${
        textOnly ? '-text-only' : ''
      }`}
    >
      {!textOnly
        ? renderIcon()
        : null}
      {!iconOnly ? <span className="badge-label">{text}</span> : null}
    </span>
  );
});

StatusBadge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  textOnly: PropTypes.bool,
  customIcon: PropTypes.elementType,
}

export default StatusBadge;

import React, { memo } from 'react';
import { OverlayTrigger, Tooltip as ReactTooltip } from 'react-bootstrap';

import HelpIconSrc from './assets/help-icon.svg';

import './HelpTooltip.sass';

const DELAY = { show: 0, hide: 300 };

const HelpTooltip = memo(function HelpTooltip({ iconClassName, content, iconSrc }) {
  return (
    <OverlayTrigger
      placement="top"
      delay={DELAY}
      overlay={<ReactTooltip className="help-tooltip-container">{content}</ReactTooltip>}
    >
      <img
        src={iconSrc ? iconSrc : HelpIconSrc}
        alt="Help"
        className={`${iconClassName} help-tooltip-image`}
      />
    </OverlayTrigger>
  );
});

export default HelpTooltip;

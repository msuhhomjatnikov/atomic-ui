import React, { memo } from 'react';
import { any, bool, string, func } from 'prop-types';

import ErrorIconSrc from './assets/error.svg';
import WarningIconSrc from './assets/warning.svg';
import SuccessIconSrc from './assets/success.svg';
import InfoIconSrc from './assets/info.svg';
import EducationIconSrc from './assets/education.svg';
import CloseIconSrc from './assets/close.svg';

import './Banner.sass';

export const BANNER_TYPE = {
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  INFO: 'INFO',
  GRAY: 'GRAY',
};

const TYPE_DEFS = {
  ERROR: {
    class: '-error',
    icon: ErrorIconSrc,
  },
  WARNING: {
    class: '-warning',
    icon: WarningIconSrc,
  },
  SUCCESS: {
    class: '-success',
    icon: SuccessIconSrc,
  },
  INFO: {
    class: '-info',
    icon: InfoIconSrc,
  },
  GRAY: {
    class: '-gray',
    icon: EducationIconSrc,
  },
};

export const BannerIcon = memo(function BannerIcon({
  type = BANNER_TYPE.GRAY,
  iconSrc,
  icon,
  iconTop = false,
}) {
  if (icon) return icon;

  return (
    <img
      className={`banner-icon ${iconTop ? 'icon-top' : ''}`}
      src={iconSrc ?? TYPE_DEFS[type].icon}
      width="16"
      alt={'icon'}
    />
  );
});

const Banner = memo(function Banner({
  children,
  message,
  className,
  inline = false,
  showIcon = false,
  type = BANNER_TYPE.GRAY,
  onClose,
  onClick,
  ...iconProps
}) {
  return (
    <div
      className={`banner ${className ? className : ''} ${TYPE_DEFS[type].class} ${
        inline ? '-inline' : ''
      }`}
      onClick={onClick}
    >
      {showIcon ? <BannerIcon {...iconProps} type={type} /> : null}
      {children ?? message}
      {onClose ? (
        <div className="close-icon-wrapper">
          <img
            className={`close-icon`}
            src={CloseIconSrc}
            width="14"
            alt={'close'}
            onClick={onClose}
          />
        </div>
      ) : null}
    </div>
  );
});

Banner.propTypes = {
  children: any,
  message: string,
  className: string,
  onClick: func,
  inline: bool,
  withIcon: bool,
  iconEl: any,
  iconSrc: any,
  iconTop: bool,
  type: string,
  closeIcon: bool,
  onClose: func,
};

export default Banner;

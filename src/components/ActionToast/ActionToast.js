import React, { memo } from 'react';

import CloseIconSrc from './assets/close-icon.svg';

import './ActionToast.sass';

export const ActionToastButtons = memo(function ActionToastButtons({ buttons, onClose }) {
    if (!(buttons?.length > 0 || onClose)) return null;

    return (
        <div className="actions-wrapper">
            {buttons?.length > 0
                ? buttons.map((button) => (
                    <div key={button.key} className="message action" onClick={button.handler}>
                        {button.label}
                    </div>
                ))
                : null}
            {onClose ? (
                <span className="close-icon-wrapper" onClick={onClose}>
          <img className="close-icon" src={CloseIconSrc} alt={'close'} width="12" />
        </span>
            ) : null}
        </div>
    );
});

const ActionToast = memo(function ActionToast({ message, ...buttonProps }) {
    return (
        <div className="moss-action-toast">
            <div className="container-box">
                <div className="message">{message}</div>
                <ActionToastButtons {...buttonProps} />
            </div>
        </div>
    );
});

export default ActionToast;

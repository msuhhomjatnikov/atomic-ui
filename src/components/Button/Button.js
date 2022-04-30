import React, { forwardRef, memo } from 'react';
import * as Icon from 'react-feather';
import PropTypes from 'prop-types';

import './Button.sass';

export const BUTTON_TYPE = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    TERTIARY: 'TERTIARY',
    DELETE: 'DELETE',
};

export const BUTTON_SIZE = {
    LARGE: 'LARGE',
    MEDIUM: 'MEDIUM',
    SMALL: 'SMALL',
    X_SMALL: 'X_SMALL',
};

export const BUTTON_ICON = {
    CANCEL: 'CANCEL',
    DELETE: 'DELETE',
    DOWNLOAD: 'DOWNLOAD',
    EDIT: 'EDIT',
    PHONE: 'PHONE',
    SAVE: 'SAVE',
    VIEW: 'VIEW',
};

export const BUTTON_ICON_POS = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
};

const BUTTON_SIZE_DEFS = {
    LARGE: { class: 'btn--lg' },
    MEDIUM: { class: 'btn--md' },
    SMALL: { class: 'btn--sm' },
    X_SMALL: { class: 'btn--xs' },
};

const BUTTON_TYPE_DEFS = {
    PRIMARY: { class: 'btn--primary' },
    SECONDARY: { class: 'btn--outline-primary' },
    TERTIARY: { class: 'btn--link' },
    DELETE: { class: 'btn--delete' },
};

const ButtonIcon = memo(function ButtonIcon({ icon, size }) {
    if (!icon) return null;
    const defaultIconSize = size === BUTTON_SIZE.X_SMALL ? 12 : 16;

    switch (icon) {
        case BUTTON_ICON.CANCEL:
            return <Icon.X size={defaultIconSize} />;
        case BUTTON_ICON.DELETE:
            return (
                <Icon.Trash2
                    size={
                        size === BUTTON_SIZE.SMALL || size === BUTTON_SIZE.MEDIUM ? '12.5' : defaultIconSize
                    }
                />
            );
        case BUTTON_ICON.DOWNLOAD:
            return <Icon.Download size={defaultIconSize} />;
        case BUTTON_ICON.EDIT:
            return <Icon.Edit2 size={defaultIconSize} />;
        case BUTTON_ICON.PHONE:
            return <Icon.Phone size={defaultIconSize} />;
        case BUTTON_ICON.SAVE:
            return <Icon.Check size={defaultIconSize} />;
        case BUTTON_ICON.VIEW:
            return <Icon.Eye size={defaultIconSize} />;
        default:
            return icon;
    }
});

const Button = memo(
    forwardRef(function Button(
        {
            text,
            children,
            className,
            icon,
            iconPos = BUTTON_ICON_POS.LEFT,
            disabled = false,
            type = BUTTON_TYPE.PRIMARY,
            size = BUTTON_SIZE.MEDIUM,
            onClick,
            isLoading = false,
            htmlType,
            ...props
        },
        ref,
    ) {
        return (
            <button
                className={`btn ${BUTTON_TYPE_DEFS[type].class} ${BUTTON_SIZE_DEFS[size].class} ${
                    icon ? 'btn--icon' : ''
                } ${isLoading ? 'loading' : ''} ${className ? className : ''}`}
                disabled={disabled}
                onClick={isLoading ? undefined : onClick}
                type={htmlType}
                ref={ref}
                {...props}
            >
                <div className={`btn-content icon-${iconPos}`}>
                    <ButtonIcon icon={icon} size={size} />
                    {text ? <span>{text}</span> : children}
                </div>
            </button>
        );
    }),
);

Button.propTypes = {
    text: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    htmlType: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;

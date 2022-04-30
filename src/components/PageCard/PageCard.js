import React from 'react';

import './PageCard.sass';

export const Title = ({ title, total = null, extraContent = null }) => (
    <div>
        {title}
        <span style={{ color: 'grey', marginLeft: '5px' }}>
      {total}
    </span>
        {extraContent}
    </div>
);

export const Header = ({ identation = true, className = null, children }) => (
    <h4
        className={`page-card_header ${identation ? '' : '-no-identation'} ${
            className ? className : ''
        }`}
    >
        {children}
    </h4>
);

export const Container = ({ children, className = '' }) => (
    <div className={`page-card_container ${className}`}>{children}</div>
);

export const Item = ({
                         label,
                         value,
                         multiline = false,
                         itemClassName = '',
                         valueAlign = 'align-left',
                     }) => {
    return (
        <div className={`page-card_item ${itemClassName}`}>
            <div className="page-card_item_label">{label}</div>
            <div className={`page-card_item_value ${multiline ? '-multiline' : ''} ${valueAlign}`}>
                {value}
            </div>
        </div>
    );
};

export const PageCard = ({
                             children,
                             narrowBottom = false,
                             narrowBottomAndTop = false,
                             stacked = false,
                             header = null,
                             onClick = null,
                         }) => (
    <div
        className={`page-card ${narrowBottom ? '-narrow-bottom' : ''} ${stacked ? '-stacked' : ''}  ${
            narrowBottomAndTop ? '-narrow-bottom-top' : ''
        } ${onClick ? '-interactive' : ''}`}
        onClick={onClick}
    >
        {header && <Header>{header}</Header>}
        {children}
    </div>
);

PageCard.Header = Header;
PageCard.Item = Item;
PageCard.Container = Container;
PageCard.Title = Title;

export default PageCard;

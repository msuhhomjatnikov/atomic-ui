import React, { forwardRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.sass';

export const CHECKBOX_SIZE = {
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
};

const CHECKBOX_SIZE_PROPS = {
  MEDIUM: { class: '-md' },
  SMALL: { class: '-sm' },
};

const Checkbox = memo(
  forwardRef(function Checkbox(
    {
      id,
      name,
      label,
      className,
      checked,
      disabled,
      onChange,
      onClick,
      indeterminate,
      size = CHECKBOX_SIZE.SMALL,
      ...props
    },
    ref,
  ) {
    const extClassNames = className || '';

    useEffect(() => {
      if (ref && ref.current) {
        ref.current.indeterminate = !!indeterminate;
      }
    }, [ref, indeterminate]);

    return (
      <div
        className={`custom-control custom-checkbox ${
          CHECKBOX_SIZE_PROPS[size].class
        } ${extClassNames} ${label ? '' : 'empty-label'}`}
      >
        <input
          type="checkbox"
          ref={ref}
          className="custom-control-input"
          id={id}
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <label className="custom-control-label" htmlFor={id} onClick={onClick}>
          {label}
        </label>
      </div>
    );
  }),
);

Checkbox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
};

export default Checkbox;

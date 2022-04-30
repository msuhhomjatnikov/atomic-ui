import React, { forwardRef, memo, useCallback } from 'react';
import { any, string, func, bool } from 'prop-types';
import HelpTooltip from '../HelpTooltip';

import './Input.sass';

const Input = memo(
  forwardRef(function Input(
    {
      type = 'text',
      value,
      label,
      placeholder,
      error,
      help,
      helpTooltip,
      helpTooltipIconSrc,
      className,
      containerClassName,
      onChange,
      optional = false,
      narrow,
      ...props
    },
    ref,
  ) {
    const hasError = !!error;
    const inputClasses = `form-control ${hasError ? 'is-invalid' : ''} ${
      className ? className : ''
    }`;

    const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);

    return (
      <div
        className={`form-group ${label || narrow ? '' : '-floating-label'} ${containerClassName ? containerClassName : ''}`}
      >
        {label ? (
          <div className="input-label-container">
            <label>
              <span>{label}</span>
              {helpTooltip ? (
                <HelpTooltip
                  content={helpTooltip}
                  iconClassName="input-help-tooltip-icon"
                  iconSrc={helpTooltipIconSrc}
                />
              ) : null}
              {optional ? <span className="optional-tag">Optional</span> : null}
            </label>
          </div>
        ) : null}
          <input
              type={type}
              className={inputClasses}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              ref={ref}
              {...props}
          />
        {hasError ? <div className="invalid-feedback">{error}</div> : null}
        {help && !hasError ? <div className="input-help form-text">{help}</div> : null}
      </div>
    );
  }),
);

Input.propTypes = {
  type: string,
  value: string,
  label: string,
  placeholder: string,
  name: string,
  error: string,
  help: string,
  onChange: func,
  className: string,
  containerClassName: string,
  helpTooltip: bool,
  optional: bool,
  disabled: bool,
};

export default Input;

import React, { memo, useCallback, useRef } from 'react';
import { string, bool, func } from 'prop-types';

import SwitchOnSrc from './assets/switch-on.svg';
import SwitchOnDisabledSrc from './assets/switch-on-disabled.svg';
import SwitchOffSrc from './assets/switch-off.svg';

import './Switch.sass';

const Switch = memo(function Switch({
  id,
  name,
  checked,
  className,
  disabled = false,
  highlightChecked = false,
  labelUnchecked,
  label,
  onChange,
}) {
  const extClassNames = className || '';
  const highlightCheckedClass = highlightChecked && checked ? '-highlight-checked' : '';

  const inputEl = useRef(null);

  const handleClickLabel = useCallback(() => {
    if (inputEl?.current?.click && !disabled) inputEl.current.click();
  }, [disabled]);

  const handleChange = useCallback(
    (e) => {
      if (onChange) onChange(e.target.checked);
    },
    [onChange],
  );

  return (
    <div className={`toogle-switch-container ${extClassNames} ${disabled ? 'disabled' : ''}`}>
      <label className="toggle-switch">
        <input
          id={id}
          name={name}
          ref={inputEl}
          type="checkbox"
          className={`toggle-switch-check`}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        />
        <span aria-hidden="true" className="toggle-switch-bar">
          <span className="toggle-switch-handle">
            <span className="toggle-switch-icon toggle-switch-icon-on">
              <img src={disabled ? SwitchOnDisabledSrc : SwitchOnSrc} alt={'on'} />
            </span>
            <span className="toggle-switch-icon toggle-switch-icon-off">
              <img src={SwitchOffSrc} alt={'off'} />
            </span>
          </span>
        </span>
      </label>
      {label ? (
        <div className={`switch-label ${highlightCheckedClass}`} onClick={handleClickLabel}>
          {checked ? label : labelUnchecked || label}
        </div>
      ) : null}
    </div>
  );
});

Switch.propTypes = {
  className: string,
  id: string,
  name: string,
  checked: bool,
  disabled: bool,
  onChange: func,
  label: string,
  labelUnchecked: string,
  highlightChecked: bool,
};

export default Switch;

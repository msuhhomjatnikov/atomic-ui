import React, { memo } from 'react';
import { string, func, bool, number } from 'prop-types';

import './RadioButton.sass';

export const RADIO_BUTTON_SIZE = {
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
};

const SIZE_DEFS = {
  MEDIUM: { class: 'radio-btn--md' },
  SMALL: { class: 'radio-btn--sm' },
};

const RadioButton = memo(function RadioButton({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  className,
  size = RADIO_BUTTON_SIZE.MEDIUM,
  disabled,
}) {
  const extClassNames = className || '';

  return (
    <div className={`radio-btn ${extClassNames} ${SIZE_DEFS[size].class}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`radio-btn__input`}
        disabled={disabled}
      />
      <span className="radio-btn__control"/>
      {label ? (
        <label htmlFor={id} className="radio-btn__label">
          {label}
        </label>
      ) : null}
    </div>
  );
});

RadioButton.propTypes = {
  label: string,
  id: string,
  name: string,
  value: string || number,
  checked: bool,
  disabled: bool,
  size: string,
  onChange: func,
};

export default RadioButton;

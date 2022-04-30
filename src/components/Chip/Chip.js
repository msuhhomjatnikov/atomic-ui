import React, { memo, useCallback } from 'react';
import { string, bool, number, func } from 'prop-types';

import { ReactComponent as CheckCircle } from './assets/check-circle.svg';

import './Chip.sass';

const Chip = memo(function Chip({
  label,
  isActive,
  onChecked,
}) {
  const handleClick = useCallback(() => {
    onChecked((old) => !old);
  }, []);

  if (!label) return null;

  return (
    <>
      <button className="chip" onClick={handleClick}>
        {isActive ? <CheckCircle /> : null}
        <span className="chip__label">{label}</span>
      </button>
    </>
  );
});

Chip.propTypes = {
  label: string,
  isActive: bool,
  isInput: bool,
  onChecked: func,
};

export default Chip;

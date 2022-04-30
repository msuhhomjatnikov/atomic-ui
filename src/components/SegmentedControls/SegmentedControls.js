import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
import { string, func, array, number } from 'prop-types';
import classnames from 'classnames';

import './SegmentedControls.sass';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const SegmentedControlsButton = memo(function SegmentedControlsButton({
  className,
  option,
  index,
  onClick,
}) {
  const handleClick = useCallback(() => {
    onClick(option, index);
  }, [onClick, option, index]);

  return (
    <button className={className} onClick={handleClick}>
      <span className="sgm-control__button__label">{option.label}</span>
    </button>
  );
});

const SegmentedControls = memo(function SegmentedControls({
  classNames,
  label,
  defaultValue,
  onChange,
  options = [],
  gridBreakpoint,
  error,
}) {
  const myRef = useRef(null);
  const width = useWindowSize();

  const [activeOption, setActiveOption] = useState(defaultValue);
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);
  const [useGrid, setUseGrid] = useState(false);

  const hasError = !!error;

  useEffect(() => {
    setUseGrid((myRef?.current?.offsetWidth ?? 0) <= (gridBreakpoint ?? -1));
  }, [gridBreakpoint, width]);

  const handleClick = useCallback(
    (option, index) => {
      if (activeOption !== option.value) {
        setActiveOption(option.value);
        setActiveOptionIndex(index);
        onChange(option.value);
      }
    },
    [onChange, activeOption],
  );

  const hasActiveOption = activeOptionIndex !== null && activeOptionIndex >= 0;

  return (
    <>
      {label ? <span className="sgm-control__label">{label}</span> : null}
      <div
        ref={myRef}
        className={classnames('sgm-control', classNames, {
          'sgm-control--error': hasError,
          'sgm-control--grid ': useGrid,
          'sgm-control--has-active-option': hasActiveOption,
        })}
      >
        {options.map((option, index) => (
          <SegmentedControlsButton
            key={option.value}
            className={classnames('sgm-control__button', {
              'sgm-control__button--active': activeOption === option.value,
              'sgm-control__button--inactive': activeOption !== option.value,
            })}
            option={option}
            index={index}
            onClick={handleClick}
          />
        ))}
      </div>
      {hasError ? <div className="invalid-feedback">{error}</div> : null}
    </>
  );
});

SegmentedControls.propTypes = {
  label: string,
  defaultValue: string,
  onChange: func,
  options: array,
  error: string,
  gridBreakpoint: number,
};

export default SegmentedControls;

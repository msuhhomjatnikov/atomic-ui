import React, { memo, useMemo } from 'react';
import { string } from 'prop-types';

import './LoadingSpinner.sass';

const LoadingSpinner = memo(function LoadingSpinner({
  size = '18px',
  borderWidth,
  className = '',
}) {
  const spinnerStyle = useMemo(() => {
    const style = {
      width: size,
      height: size,
    };
    if (borderWidth) style.borderWidth = borderWidth;
    return style;
  }, [borderWidth, size]);

  return <div className={`spinner-border spinner-border-sm ${className}`} style={spinnerStyle} />;
});

LoadingSpinner.propTypes = {
  size: string,
};

export default LoadingSpinner;

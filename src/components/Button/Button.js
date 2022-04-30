import React from 'react';
import PropTypes from 'prop-types';

const Button = ({label}) => {
    return(
        <button type="button">
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
}

export default Button;
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ as: Component = 'button', text, ...rest }) => {
    const className = `button ${Component !== 'button' ? Component : ''}`;
    if (typeof Component === 'string') 
  {
    return <Component className={className} {...rest}>{text}</Component>;
  }

  return <Component className={className} text={text} {...rest} />;
};

Button.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType
  ]),
  text: PropTypes.string.isRequired,
};

export default Button;
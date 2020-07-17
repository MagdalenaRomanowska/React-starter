import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

Button.propTypes = {
  variant: PropTypes.any,
};

const Button = ({variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

export default Button;

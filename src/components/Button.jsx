import React from 'react';
import { Link } from 'gatsby';
import '@styles/components/Button.scss';

const handleDisabled = e => e.preventDefault();

export const Button = ({ className, disabled, to = '', ...props }) => (
  <Link
    className={`button${className ? ` ${className}` : ''}${
      disabled ? ' button--disabled' : ''
    }`}
    onClick={disabled && handleDisabled}
    to={to}
    {...props}
  />
);

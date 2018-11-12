import React from 'react';

import './Button.css';

export const Button = ({ text, className }) => (
  <button className={className}>{text}</button>
)
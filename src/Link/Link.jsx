import React from 'react';

import './Link.css';

export const Link = ({ text, className, href }) => (
    <a className={className} href={href}>{text}</a>
)
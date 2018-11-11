import React, { Component } from 'react';
import { cn } from '@bem-react/classname';


import './Button.css';

const cnButton = cn('Button');

class Button extends Component {
  render() {
    const { props } = this;
    return (
        <button className={cnButton({
            size: props.size,
            theme: props.theme,
            type: props.type})}>
        {props.text}
        </button>
    );
  }
}

export default Button;

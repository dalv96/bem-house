import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Link.css';

const cnLink = cn('Link');

class Link extends Component {
  render() {
    const { props } = this;
    return (
      <a
        className={cnLink({
          theme: props.theme,
          size: props.size || 'm'
        }, [props.className])}

        href={props.href}>
        {props.text}
      </a>
    );
  }
}

export default Link;

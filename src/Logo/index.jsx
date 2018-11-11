import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

const cnLogo = cn('Logo');

class Logo extends Component {
  render() {
    const { props } = this;
    return (
        <div className={cnLogo(null, [props.className])}>
            <img className={cnLogo('Img')} src={props.src} alt={props.alt} />
        </div>
    );
  }
}

export default Logo;

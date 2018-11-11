import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Card-Close.css';

import cross from './cross.svg';
import whiteCross from './cross-white.svg';

const cnCard= cn('Card');

class Card extends Component {
  render() {

    return (
      <div className={cnCard('Close')}>
        <img src={(this.props.type === 'critical')?whiteCross:cross} alt="Закрыть"/>
      </div>
    );
  }
}

export default Card;

import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Card-Open.css';
import next from './next.svg';


const cnCard= cn('Card');

class Card extends Component {
  render() {

    return (
      <div className={cnCard('Open')}>
        <img src={next} alt="Открыть"/>
      </div>
    );
  }
}

export default Card;

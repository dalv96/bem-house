import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import Events from '../Events';
import './Content.css';

const cnContent = cn('Content');

class Content extends Component {
  render() {
    return (
      <div className={cnContent()}>
        <h1 className={cnContent('Title')}>Лента событий</h1>
        <div className={cnContent('Body')}>
          <Events/>
        </div>
      </div>
    );
  }
}

export default Content;

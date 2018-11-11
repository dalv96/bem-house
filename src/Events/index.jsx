import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import Card from '../Card';
import './Events.css';

import { events } from './events.json'; // Наверное так не хорошо делать. Но пока пусть так будет.

const cnEvents = cn('Events');

class Events extends Component {
  render() {
    return (
      <div className={cnEvents()}>
        {
          events.map( item => {
            return (
              <Card key={item.id} event={item}/>
            )
          })
        }
      </div>
    );
  }
}

export default Events;

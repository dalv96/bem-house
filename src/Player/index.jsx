import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Player.css';
import prev from './Prev.svg'

const cnPlayer = cn('Player');

class Player extends Component {
  render() {
    const { props } = this;
    
    return (
        <div className={cnPlayer()}>
            <div className={cnPlayer('Play')}>
                <div className={cnPlayer('Cover')}>
                    <img src={props.cover} alt="Обложка"/>
                </div>
                <div className={cnPlayer('Name')}>{props.artist} - {props.name}</div>
                <div className={cnPlayer('Track')}>
                    <input type="range" min="0" max="100" defaultValue="25"/>
                    <div className={cnPlayer('Time')}>{props.length}</div>
                </div>
            </div>
            <div className={cnPlayer('Action')}>
                <div>
                    <img className={cnPlayer('Prev')} src={prev} alt=""/>
                    <img className={cnPlayer('Next')} src={prev} alt=""/>
                </div>
                <div className={cnPlayer('Volume')}>
                    <input type="range" min="0" max="100" defaultValue="80"/>
                    <div className={cnPlayer('Value')}>{props.volume}%</div>
                </div>
            </div>

        </div>
    );
  }
}

export default Player;

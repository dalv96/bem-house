import React from 'react';
import { cn } from '@bem-react/classname';

import CardClose from './Card-Close';
import CardOpen from './Card-Open';
import Logo from '../Logo';
import Player from '../Player';
import Status from '../Status';
import ConfirmPannel from '../ConfirmPannel';

import './Card.css';

const icons = {
  ac: require('./icons/ac.svg'),
  battery: require('./icons/battery.svg'),
  cam: require('./icons/cam.svg'),
  fridge: require('./icons/fridge.svg'),
  kettle: require('./icons/kettle.svg'),
  music: require('./icons/music.svg'),
  key: require('./icons/key.svg'),
  'robot-cleaner': require('./icons/robot-cleaner.svg'),
  router: require('./icons/router.svg'),
  stats: require('./icons/stats.svg'),
  thermal: require('./icons/thermal.svg')
}

const cnCard = cn('Card');

export const Card = ({event, className}) => {
  
  let description;
  if (event.description) {
    description = <div className={cnCard('Text')}>{event.description}</div>
  }

  const data = event.data;

  let image;
  if (data && data.image) {
    image = <img className={cnCard('Image')} src={data.image} alt="Картинка"/>
  }

  let music;
  if (data && data.track) {
    music = <Player
      cover={data.albumcover}
      artist={data.artist}
      name={data.track.name}
      length={data.track.length}
      volume={data.volume}/>
  }

  let temperature;
  if (data && data.temperature) {
    temperature = <Status
      data={[
        {
          name: 'Температура',
          val: `${data.temperature} C`
        },
        {
          name: 'Влажность',
          val: `${data.humidity}%`
        }
      ]}/>
  }

  let actions;
  if (data && data.buttons) {
    actions = <ConfirmPannel className={cnCard('Actions')}/>
  }

  return (
    <div className={className}>
      <CardClose type={event.type}/>
      <CardOpen/>
      <div className={cnCard('Head')}>
        <div className={cnCard('Title')}>
          <Logo className={cnCard('Icon')} src={icons[event.icon]}/>
          <div className={cnCard('Name')}>{event.title}</div>
        </div>
        <div className={cnCard('Info')}>
          <div className={cnCard('Device')}>{event.source}</div>
          <div className={cnCard('Date')}>{event.time}</div>
        </div>
      </div>
      <div className={cnCard('Body')}>
        {description}
        <div className={cnCard('Optional')}>
          {image}
          {music}
          {temperature}
          {actions}
        </div>
      </div>
    </div>
  );
}
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import Link from '../Link';
import './Navigator.css';

const cnNav = cn('Navigator');

class Navigator extends Component {
  render() {
    return (
      <div className={cnNav()}>
        <Link className={cnNav('Link')} active={true} theme="standart" size="m"  text="Сводка" />
        <Link className={cnNav('Link')} theme="standart" size="m" text="Устройства" href="/" />
        <Link className={cnNav('Link')} theme="standart" size="m" text="Сценарии" href="/" />
      </div>
    );
  }
}

export default Navigator;

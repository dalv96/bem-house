import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import logo from './logo.svg';
import Navigator from '../Navigator';
import Logo from '../Logo';

import './Header.css';

const cnHeader = cn('Header');

class Header extends Component {
  render() {
    return (
      <div className={cnHeader()}>
        <Logo className={cnHeader('Logo')} src={logo} alt='Яндекс Дом'/>
        <Navigator/>
      </div>
    );
  }
}

export default Header;

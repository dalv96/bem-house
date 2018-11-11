import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import Link from '../Link';

import './Footer.css';

const cnFooter = cn('Footer');

class Footer extends Component {
  render() {
    return (
      <div className={cnFooter()}>
        <Link className={cnFooter('Link')} theme="standart" size="s" href="/" text="Помощь"/>
        <Link className={cnFooter('Link')} theme="standart" size="s" href="/" text="Обратная связь"/>
        <Link className={cnFooter('Link')} theme="standart" size="s" href="/" text="Разработчикам"/>
        <Link className={cnFooter('Link')} theme="standart" size="s" href="/" text="Условия пользования"/>
        <Link className={cnFooter('Link')} theme="standart" size="s" href="/" text="Авторские права"/>
        <div className={cnFooter('Company')}>© 2001–2017 ООО «Яндекс»</div>
      </div>
    );
  }
}

export default Footer;

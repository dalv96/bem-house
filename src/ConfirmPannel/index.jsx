import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import Button from '../Button';

import './ConfirmPannel.css';

const cnConfirmPannel = cn('ConfirmPannel');

class ConfirmPannel extends Component {
  render() {
    
    return (
        <div className={cnConfirmPannel()}>
            <Button size="m" theme="standart" type="agree" text="Да"/>
            <Button size="m" theme="standart" text="Нет"/>
        </div>
    );
  }
}

export default ConfirmPannel;

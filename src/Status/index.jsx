import React, { Component } from 'react';
import { cn } from '@bem-react/classname';

import './Status.css';

const cnStatus = cn('Status');

class Status extends Component {
  render() {
    const { data } = this.props;
    
    return (
        <div className={cnStatus()}>
            {
                data.map( item => {
                    return (
                        <div className={cnStatus('Item')}>
                            <div className={cnStatus('Name')}>{item.name}:</div>
                            <div className={cnStatus('Value')}>{item.val}</div>
                        </div>
                    )
                })
            }
        </div>
    );
  }
}

export default Status;

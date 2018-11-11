import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './App.css';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const cnApp = cn('App');

class App extends Component {
  render() {
    return (
      <div className={cnApp()}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;

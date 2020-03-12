import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header2 from './components/header/Header2';
import Chatbot from './components/chatbot/Chatbot';
import News from './components/news/News';
// eslint-disable-next-line

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header2 />
          <section>
            <Chatbot />
          </section>
          <aside>
            <News />
          </aside>
        </div>
      </Router>
    );
  }
}

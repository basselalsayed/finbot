import React, { Component } from 'react';
import Header from './components/header/Header';
import Header2 from './components/header/Header2';
import Chatbot from './components/chatbot/Chatbot';
import ThemeSwitcher from './ThemeSwitcher';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header2 />
          <Chatbot />
        </div>
      </Router>
    );
  }
}

import React, { Component } from 'react';
import Greeting from './components/greeting/Greeting'
import Header from './components/header/Header'
import Chatbot from './components/chatbot/Chatbot'
// eslint-disable-next-line
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


export default class App extends Component {
  render() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Greeting />
        <Chatbot />
      </div>
    </Router>
  );
  }
}



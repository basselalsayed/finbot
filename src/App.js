import React, { Component } from 'react';
import Header from './components/header/Header'
import Header2 from './components/header/Header2'
import Chatbot from './components/chatbot/Chatbot'
import News from './components/news/News'
import ThemeSwitcher from './ThemeSwitcher'
import Draggable from 'react-draggable';
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



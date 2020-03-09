import React, { Component } from 'react';
// import Greeting from './components/greeting/Greeting'
// import Header from './components/header/Header'
import Header2 from './components/header/Header2'
import Chatbot from './components/chatbot/Chatbot'
// import ThemeSwitcher from './ThemeSwitcher'
// import Draggable from 'react-draggable';
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
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
      <div className="App">
        <Header2 />
        {/* <Greeting /> */}
        <Chatbot />
      </div>
    </Router>
  );
  }
}



import React from 'react';
import Greeting from './components/greeting/Greeting'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;

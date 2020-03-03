import React from 'react';
import axios from 'axios';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ""
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    console.log('hello')
    axios
    .get('http://localhost:8000/greetings')
    .then(res => this.setState({ greeting: res.data }))
  };

  render() {
    return this.state.greeting
  }
}

export default Greeting;

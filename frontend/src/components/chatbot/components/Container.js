import React, { Component } from 'react';
// import container from './container.css';
import { Card, Form, Button } from 'react-bootstrap'
import Conversation from './Conversation'
import NewMessage from './NewMessage';
import axios from 'axios'

export default class ExampleContainer extends Component {

  // constructor(props) {
  //   super(props)
  
    state = {
       messages: [
          {
            content: 'hello, whats your name?',
            type: 'response'
          }, 
          {
            content: 'hey',
            type: 'send'
          }
       ]
    }
  // }

  apiCallGet = () => {
    axios
    .get('http://localhost:8000/api/')
    .then(res => this.newMessage(
      { content: res.data,
        type: 'response'
      })) 
  };

  newMessage = (message) => {
    let clone = this.state.messages.slice()
    let length = clone.length
    // add element to cloned array
    clone[length] = message
    this.setState({ messages: clone })
  }

  render() {
    return(

      <Card style={{ width: '20rem' }}>
        <Card.Header>Finbot</Card.Header>
        <Card.Body>
          <Conversation messages={this.state.messages} />
        </Card.Body>
        <Card.Footer>
          <NewMessage newMessage={this.newMessage} apiCallGet={this.apiCallGet} />
        </Card.Footer>
      </Card>

  )
}
}

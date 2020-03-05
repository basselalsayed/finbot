import React, { Component } from 'react';
// import container from './container.css';
import { Card, Form, Button } from 'react-bootstrap'
import Conversation from './Conversation'
import NewMessage from './NewMessage';
export default class ExampleContainer extends Component {

  // constructor(props) {
  //   super(props)
  
    state = {
       messages: ['hello', 'hey']
    }
  // }
  newMessage = (message) => {
    let clone = this.state.messages.slice()
    let length = clone.length
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
          <NewMessage newMessage={this.newMessage}/>
        </Card.Footer>
      </Card>
  )
}
}

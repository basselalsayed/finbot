import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import Conversation from './Conversation'
import Loading from './Loading'
import NewMessage from './NewMessage';
import axios from 'axios'

export default class ExampleContainer extends Component {

  state = {
    loading: false,
    messages: [
      {
        content: 'hello, whats your name?',
        type: 'response'
      }, 
      {
        content: 'hey',
        type: 'send'
      }
    ],
    showBot: false,
  }

  toggleBot = () => {
    this.setState({ showBot: !this.state.showBot });
  }


  loading = () => {
    this.setState({ loading: !this.state.loading })
  }

  apiCallGet = () => {
    axios
      .get('http://localhost:8000/api/')
      .then(res => this.newMessage(
        { 
          content: res.data,
          type: 'response'
        }
      )) 
  };

  newMessage = (message) => {
    let clone = this.state.messages.slice()
    let length = clone.length
    // add element to cloned array
    clone[length] = message
    this.setState({ messages: clone })
  }

  render() {
    const { showBot } = this.state;
    if (showBot) {
      return (
        <Card id='chat-window' >
          <Card.Header onClick={this.toggleBot} style={{cursor: 'pointer'}}>UB</Card.Header>
          <Card.Body>
            <Conversation messages={this.state.messages} />
          </Card.Body>
          { this.state.loading ? <Loading /> : null }
          <Card.Footer>
            <NewMessage loading={this.loading} newMessage={this.newMessage} apiCallGet={this.apiCallGet} />
          </Card.Footer>
        </Card>
      )
    } else {
      return (
        <div className="chat-window-btn" data-toggle="chat-window" onClick={this.toggleBot}>
          <Button id='btn-show-bot'>CHAT</Button>
        </div>
      )
    }

  }
}

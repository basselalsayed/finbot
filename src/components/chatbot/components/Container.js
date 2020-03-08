import React, { Component } from 'react';
// import container from './container.css';
import { Card, Form, Button } from 'react-bootstrap'
import Conversation from './Conversation'
import Loading from './Loading'
import NewMessage from './NewMessage';
import axios from 'axios'
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div>
        <Card style={{ width: '20rem' }} id='chat-window' >
          <Card.Header>Finbot</Card.Header>
          <Card.Body>
            <Conversation messages={this.state.messages} />
            { this.state.loading ? <Loading /> : null }
          </Card.Body>
          <Card.Footer>
            <NewMessage loading={this.loading} newMessage={this.newMessage} apiCallGet={this.apiCallGet} />
          </Card.Footer>
        </Card>
        <nav onClick={this.toggleBot}>
            <div id="chat-window-btn" data-toggle="chat-window" >
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div
          style={{
            width: 450,
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 1000,
            fontSize: '50px',
          }}
        >
          <nav onClick={this.toggleBot}>
            <div id="chat-window-btn" data-toggle="chat-window" >
              <FontAwesomeIcon icon={faCommentDots} />
            </div>
          </nav>
        </div>
      )
    }

  }
}

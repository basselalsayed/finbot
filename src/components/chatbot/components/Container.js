import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Conversation from './Conversation';
import Loading from './Loading';
import NewMessage from './NewMessage';
import axios from 'axios';

export default class ExampleContainer extends Component {
  state = {
    loading: false,
    showBot: true,
    timer: 0,
    messages: [
      {
        content:
          "Beep, boop, bop 🤖 Hi there, I'm Ubb. Nice to meet you! You can ask me anything about personal finance. If you would like a list of topics that I can tell you about, type 'help'",
        type: 'response',
      },
    ],
  };

  toggleBot = () => {
    this.setState({ showBot: !this.state.showBot });
  };

  listen = e => {
    window.addEventListener(e, this.stopTimer());
  };

  startTimer = () => {
    this.timer = setTimeout(() => {
      axios.post('http://localhost:8000/api/user_input/', { text: 'help' });
      this.apiCallGet();
    }, 60000);
  };

  stopTimer = () => {
    clearTimeout(this.timer);
  };

  loading = () => {
    this.setState({ loading: !this.state.loading });
  };

  apiCallGet = () => {
    axios.get('http://localhost:8000/api/').then(res =>
      this.newMessage({
        content: res.data,
        type: 'response',
      })
    );
  };

  newMessage = message => {
    let clone = this.state.messages.slice();
    let length = clone.length;
    // add element to cloned array
    clone[length] = message;
    this.setState({ messages: clone });
  };

  scrollToBottom = () => {
    let element = document.getElementById("chat-body");
    element.scrollTo(0,element.scrollHeight)
  }

  render() {
    const { showBot } = this.state;
    if (showBot) {
      return (
        <Card
          id="chat-window"
          onClick={this.listen}
          onKeyPress={this.listen}
          onScroll={this.listen}
        >
          <Card.Header onClick={this.toggleBot} style={{ cursor: 'pointer' }}>
            {' '}
            🤖 ubb
          </Card.Header>
          <Card.Body id='chat-body'>
            <Conversation messages={this.state.messages} scroll={this.scrollToBottom}/>
          </Card.Body>
          {this.state.loading ? <Loading /> : null}
          <Card.Footer>
            <NewMessage
              loading={this.loading}
              newMessage={this.newMessage}
              apiCallGet={this.apiCallGet}
              startTimer={this.startTimer}
            />
          </Card.Footer>
        </Card>
      );
    } else {
      return (
        <div
          className="chat-window-btn"
          data-toggle="chat-window"
          onClick={this.toggleBot}
        >
          <Button id="btn-show-bot">CHAT</Button>
        </div>
      );
    }
  }
}

import React, { Component } from 'react';
import Message from './Message';
import * as uuid from 'uuid';
import PropTypes from 'prop-types';

export default class Conversation extends Component {

  componentDidUpdate = () => {
    this.props.scroll()
  }

  render() {
    return this.props.messages.map(message => (
      <Message key={uuid.v4()} message={message} />
    ));
  }
}

Conversation.propTypes = {
  messages: PropTypes.array.isRequired,
};

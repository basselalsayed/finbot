import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Message from './Message'
import * as uuid from 'uuid'
import PropTypes from 'prop-types'


export default class Conversation extends Component {

  render() {
    return this.props.messages.map((message) => (
        <Message key={uuid.v4()} content={message}/>
      ))
  }
}

Conversation.propTypes = {
  messages: PropTypes.array.isRequired
}



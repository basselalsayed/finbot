import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Message from './Message'
import uuid from 'uuid'
import PropTypes from 'prop-types'


export default class Conversation extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      messages: ['hello', 'hey']
  //   }
  // }
  
  render() {
    return this.props.messages.map((message) => (
        <Message content={message}/>
      ))
  }
}

Conversation.propTypes = {
  messages: PropTypes.array.isRequired
}



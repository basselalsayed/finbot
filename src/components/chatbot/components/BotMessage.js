import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'


export default class BotMessage extends Component {

  render() {
    const {bot_output} = this.props.message
    return (
      <Card.Text class='bot-output' >{ bot_output }</Card.Text>
    )
  }
}



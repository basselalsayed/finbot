import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Message extends Component {

  render() {
      const content = this.props.content
      return (
      <Card.Text>{ content }</Card.Text>
    )
  }
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
}


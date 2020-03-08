import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Message extends Component {

  getStyle = (type) => {
    console.log(type)
      return { backgroundColor: (type === 'response') ? 'olivedrab' : 'lightslategray',
              textAlign: (type === 'response') ? 'left' : 'right',
              float: (type === 'response') ? 'left' : 'right',
    }
  }


  render() {
      const {content, type} = this.props.message
      return (
      <Card.Text style={this.getStyle(type)}>{ content }</Card.Text>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  // type: PropTypes.string.isRequired
}


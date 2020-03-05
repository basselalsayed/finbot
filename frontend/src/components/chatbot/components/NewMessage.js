import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

export default class NewMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    console.log(this)
    e.preventDefault();
    this.props.newMessage(this.state.message);
    this.setState({message: ''})
  }
  
  render() {
    return (
      <Form onSubmit={this.onSubmit} inline>
        <Form.Group controlId="formBasicEmail">
          <Form.Control name='message' type="text" value={this.state.message} onChange={this.onChange} placeholder="Ask me anything" />
          <Button variant='primary' type='submit'>
            Send
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
NewMessage.propTypes = {
  newMessage: PropTypes.func.isRequired
}



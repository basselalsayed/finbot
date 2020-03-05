import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

export default class NewMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      type: 'send'
    }
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.newMessage(this.state);
    this.setState({content: '', type: 'send'})
  }
  
  render() {
    return (
      <Form onSubmit={this.onSubmit} inline>
        <Form.Group controlId="formBasicEmail">
          <Form.Control name='content' type="text" value={this.state.content} onChange={this.onChange} placeholder="Ask me anything" />
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



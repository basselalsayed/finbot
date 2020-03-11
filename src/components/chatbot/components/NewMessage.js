import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      type: 'send',
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setStyle();
  };

  apiCallPost = () => {
    const userInput = {
      text: this.state.content,
    };

    axios.post('http://localhost:8000/api/user_input/', userInput);
  };

  onSubmit = e => {
    e.preventDefault();
    this.apiCallPost();
    this.props.newMessage(this.state);
    this.props.loading();
    this.setState({ content: '', type: 'send' });
    this.props.startTimer();
    setTimeout(() => {
      this.props.loading();
      this.props.apiCallGet();
    }, Math.random() * 3000);
  };

  setStyle = type => {
    return { backgroundColor: '#08AEEA' };
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} inline>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="content"
            type="text"
            value={this.state.content}
            onChange={this.onChange}
            placeholder="Ask me anything"
          />
          <Button variant="primary" type="submit">
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
NewMessage.propTypes = {
  newMessage: PropTypes.func.isRequired,
  apiCallGet: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
};

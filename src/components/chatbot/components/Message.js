import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Message extends Component {
  getStyle = type => {
    return {
      backgroundColor: type === 'response' ? '#08AEEA' : '#ebecee',
      textAlign: type === 'response' ? 'left' : 'right',
      float: type === 'response' ? 'left' : 'right',
      color: type === 'response' ? 'white' : 'black',
    };
  };

  render() {
    const { content, type } = this.props.message;
    if (typeof content === 'string') {
      return <Card.Text style={this.getStyle(type)}>{content}</Card.Text>;
    } else if (typeof content === 'object' && content["title"] !== undefined) {
      return (
        <Card.Text style={this.getStyle(type)} >
          <h4>{content.title}</h4>
          <p>{content.body}</p>
          <ul>
            {content.list.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </Card.Text>
      );
    } else {
      return (
        <div>
          <Card.Text style={this.getStyle(type)} >
            <ul>
              <li>
                <Card.Link href={Object.values(content)[0]} target="_blank">
                  {Object.keys(content)[0]}
                </Card.Link>
              </li>
              <li>
                <Card.Link href={Object.values(content)[1]}>
                  {Object.keys(content)[1]}
                </Card.Link>
              </li>
              <li>
                <Card.Link href={Object.values(content)[2]}>
                  {Object.keys(content)[2]}
                </Card.Link>
              </li>
            </ul>
          </Card.Text>

          <Card.Text style={this.getStyle(type)}>
            Is there another topic I can help you with today?
          </Card.Text>
        </div>
      );
    }

  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

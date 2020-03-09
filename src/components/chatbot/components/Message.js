import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Message extends Component {

  getStyle = (type) => {
      return { backgroundColor: (type === 'response') ? 'olivedrab' : 'lightslategray',
              textAlign: (type === 'response') ? 'left' : 'right',
              float: (type === 'response') ? 'left' : 'right',
    }
  }

  splitLinks = (content) => {
    // <a href={link}>{link}</a>
    const links = content
    const updatedLinks = []

    Object.keys(links).map(function(key) {
      return [key, links[key]];
    });
    
    // for (var key in links) {
    //   if(links.hasOwnProperty(key)) {
    //     return <a href={links[key]}>{key}</a>
    //     // console.log(key + "-->" + links[key])
    //   }
    // }

    return updatedLinks.join()
  }
  render() {
      const {content, type} = this.props.message
      if (typeof content == 'string') {
        return (
          <Card.Text style={this.getStyle(type)}>{ content }</Card.Text>
        )
      } else {
        return (
          <div>
          <Card.Text style={this.getStyle(type)} >
            <Card.Link href={Object.values(content)[0]} >{ Object.keys(content)[0] }</Card.Link>
            <Card.Link href={Object.values(content)[1]} >{ Object.keys(content)[1] }</Card.Link>
          </Card.Text>
          <Card.Text style={this.getStyle(type)}>Is there another topic I can help you with today?</Card.Text>
          </div>

          // <Card.Link style={this.getStyle(type)} href={Object.keys(links[1])[0]} >{ Object.values(links[1])[0] }</Card.Link>
          // <Card.Text style={this.getStyle(type)} >{ content }</Card.Text>
        )
      }
      
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  // type: PropTypes.string.isRequired
}


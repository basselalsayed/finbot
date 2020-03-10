import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Article extends Component {
  render() {
    return (
     <Card.text>
     {/* I think this is wrong path to headline/story content*/}
      {this.props.story} 
     </Card.text>
    )
  }
}

Article.propTypes = {
  story: PropTypes.object.isRequired
}

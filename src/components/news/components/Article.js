import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Article extends Component {
  render() {
    const { story } = this.props
    return (
     <Card.Text>
     {/* I think this is wrong path to headline/story content*/}
      {story} 
     </Card.Text>
    )
  }
}

Article.propTypes = {
  story: PropTypes.object.isRequired
}

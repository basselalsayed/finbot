import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Article extends Component {


  render() {
    const { story } = this.props
    return (
      <Card className='article'>
        {/* <Card.Img src={story.urlToImage}></Card.Img>
        <Card.Body> */}
          <Card.Link className='article-link' href={story.url}>{story.title}</Card.Link>
        {/* </Card.Body> */}
      </Card>
    )
  }
}

Article.propTypes = {
  story: PropTypes.object.isRequired
}

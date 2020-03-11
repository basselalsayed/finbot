import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Article extends Component {
  render() {
    const { story } = this.props;
    if (story.urlToImage !== '') {
      return (
        <Card className="article">
          <Image src={story.urlToImage} thumbnail width="128" height="128" />
          {/* <Card.Body> */}
          <Card.Link className="article-link" href={story.url}>
            {story.title}
          </Card.Link>
          {/* </Card.Body> */}
        </Card>
      );
    } else {
      return (
        <Card className="article">
          <Card.Link className="article-link" href={story.url}>
            {story.title}
          </Card.Link>
          {/* </Card.Body> */}
        </Card>
      );
    }
  }
}

Article.propTypes = {
  story: PropTypes.object.isRequired,
};

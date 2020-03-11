import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Article extends Component {
  render() {
    const { story } = this.props;
    if (story.urlToImage !== '') {
      return (
        <ul>
          <Card.Img src={story.urlToImage} ></Card.Img>
          <Card.Link className='article-link' href={story.url}>{story.title}</Card.Link>
        </ul>      
        );
    } else {
      return (
        <ul>
          <Card.Link className='article-link' href={story.url}>{story.title}</Card.Link>
        </ul>
      );
    }
  }
}

Article.propTypes = {
  story: PropTypes.object.isRequired,
};

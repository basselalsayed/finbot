import React, { Component } from 'react'
import Article from './Article'
import axios from 'axios'
import * as uuid from 'uuid'

export default class Articles extends Component {

  state = {
    stories: []
  }

  componentDidMount() {
    this.apiCallGet();
  }

  apiCallGet = () => {
    const url = 'http://newsapi.org/v2/business?' +
                'apiKey=';
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({ stories: res.data.articles })
      })
  };

  render() {
    return this.state.stories.map((story) => (
      <Article key={uuid.v4()} story={story} />
    ))
  }
}


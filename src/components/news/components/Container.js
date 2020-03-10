import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Articles from './Articles'

export default class Container extends Component {
  render() {
    return (
      <Fragment id='news-api'>
        <Card.Header> 
          Financial News 
        </Card.Header>
        <Articles />
      </Fragment>
    )
  }
}



import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Articles from './Articles'

export class Container extends Component {
  render() {
    return (
      <Fragment>
        <Card.Header> 
          Financial News 
        </Card.Header>
        <Articles />
      </Fragment>
    )
  }
}

export default Container

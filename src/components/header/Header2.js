import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export class Header2 extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">FINBOT.</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header2;

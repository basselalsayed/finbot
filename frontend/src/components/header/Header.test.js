import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('Header renders', () => {
  const component = renderer.create(
    <Router>
      <Header />
    </Router> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
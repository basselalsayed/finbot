import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting'

test('Greeting works', () => {
  const component = renderer.create(<Greeting />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot()
});
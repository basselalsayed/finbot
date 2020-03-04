import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // // const linkElement = getByText(/learn react/i);
  // expect('hello').toBeInTheDocument();

  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

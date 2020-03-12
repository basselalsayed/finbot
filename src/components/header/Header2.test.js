import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import Header2 from './Header2';


test('Header renders', () => {
  const component = renderer.create(
    <Router>
      <Header2 />
    </Router> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('Header contains header html element', () => {
  expect(render(
    <Router>
      <Header />
    </Router>).text()).toEqual('FINBOT.') 
})
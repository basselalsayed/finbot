import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import Chatbot from './Chatbot';


test('Chatbot renders', () => {
  const component = renderer.create(
    <Router>
      <Chatbot />
    </Router> 
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

// test('Chatbot contains header html element', () => {
//   expect(render(
//     <Router>
//       <Chatbot />
//     </Router>).text()).toEqual('FinbotHome') 
// })
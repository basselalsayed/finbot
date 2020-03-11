import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import NewMessage from "./NewMessage";


describe("NewMessage component", () => {
  test("renders", () => {
    const wrapper = shallow(<NewMessage />);

    expect(wrapper.exists()).toBe(true);
  });


});
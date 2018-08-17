import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import HelloWorld from "./index";

it("Runs without crashing", () => {
  const wrapper = shallow(<HelloWorld />);
});

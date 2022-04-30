import React from "react";
import renderer from "react-test-renderer";
import Home from '../../Components/Home';

test("renders the Home component correctly", () => {
  const testRenderer = renderer.create(<Home />);
  expect(testRenderer).toMatchSnapshot();
});

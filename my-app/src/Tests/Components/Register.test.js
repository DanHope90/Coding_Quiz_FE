import React from "react";
import renderer from "react-test-renderer";
import Register from "../../Components/Register";

test("renders the Home component correctly", () => {
  const testRenderer = renderer.create(<Register />);
  expect(testRenderer).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Login from "../../Components/Login";

test("renders the Login component correctly", () => {
  const testRenderer = renderer.create(<Login />);
  expect(testRenderer).toMatchSnapshot();
});

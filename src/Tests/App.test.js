import React from "react";
import renderer from "react-test-renderer";
import App from '../Components/App';

test("renders the app correctly", () => {
  const testRenderer = renderer.create(<App />);
  expect(testRenderer).toMatchSnapshot();
});

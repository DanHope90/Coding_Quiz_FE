import React from "react";
import renderer from "react-test-renderer";
import SavedQuizzes from "../../Components/SavedQuizzes";

test("renders the SavedQuizzes component correctly", () => {
  const testRenderer = renderer.create(<SavedQuizzes />);
  expect(testRenderer).toMatchSnapshot();
});

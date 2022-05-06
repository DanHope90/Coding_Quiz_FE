import React from "react";
import renderer from "react-test-renderer";
import ExecuteQuiz from "../../Components/ExecuteQuiz";

test("renders the ExecuteQuiz component correctly", () => {
  const testRenderer = renderer.create(<ExecuteQuiz />);
  expect(testRenderer).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import ExecuteQuiz from "../../Components/ExecuteQuiz";

test("renders the ExecuteQuiz component correctly", () => {
  const testObject = { questions: [] };

  const testRenderer = renderer.create(<ExecuteQuiz desiredQuiz={testObject} />);
  expect(testRenderer).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import TakeAQuiz from "../../Components/TakeAQuiz";

test("renders the TakeAQuiz component correctly", () => {
  const testRenderer = renderer.create(<TakeAQuiz />);
  expect(testRenderer).toMatchSnapshot();
});

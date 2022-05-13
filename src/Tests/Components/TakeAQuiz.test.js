/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import renderer from "react-test-renderer";
import TakeAQuiz from "../../Components/TakeAQuiz";
import Context from "../../Utils/Context";

test("renders the TakeAQuiz component correctly", () => {
  const dummyArray = [{ quizName: "JavaScript", description: "JavaScript", questions: [] }];

  const testRenderer = renderer.create(
    <Context.Provider value={dummyArray}><TakeAQuiz /></Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});

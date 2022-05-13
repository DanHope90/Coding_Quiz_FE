/* eslint-disable react/jsx-no-constructed-context-values */
import React from "react";
import renderer from "react-test-renderer";
import RandomQuiz from "../../Components/RandomQuiz";
import Context from "../../Utils/Context";

test("renders the random quiz component correctly", () => {
  const dummyArray = [{ quizName: "JavaScript", description: "JavaScript", questions: [] }];

  const testRenderer = renderer.create(
    <Context.Provider value={dummyArray}><RandomQuiz /></Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});

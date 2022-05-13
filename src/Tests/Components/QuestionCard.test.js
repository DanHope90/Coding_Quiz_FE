import React from "react";
import renderer from "react-test-renderer";
import QuestionCard from "../../Components/QuestionCard";

test("renders the Question Card component correctly", () => {
  const dummyQuestion = {
    correct_answer: "*",
    answers: [{ a: "*" }, { b: "/" }, { c: "-" }, { d: "+" }],
    question: "What is the symbol for multiplication?",
  };

  const testRenderer = renderer.create(<QuestionCard
    score={0}
    setScore={jest.fn()}
    qNumber={1}
    setQNumber={jest.fn()}
    chosenAnswer="*"
    setChosenAnswer={jest.fn()}
    question={dummyQuestion}
  />);
  expect(testRenderer).toMatchSnapshot();
});

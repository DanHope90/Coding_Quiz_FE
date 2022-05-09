import React from "react";
import renderer from "react-test-renderer";
import QuestionCard from "../../Components/QuestionCard";

test("renders the Question Card component correctly", () => {
  const dummyQuestion = {
    question: "What is the symbol for multiplcation?",
    answers: [{ a: "*" }, { b: "/" }, { c: "-" }, { d: "+" }],
    correct_answer: "*",
  };

  const testRenderer = renderer.create(<QuestionCard value={dummyQuestion} />);
  expect(testRenderer).toMatchSnapshot();
});

import React, { useState } from "react";
import PropTypes from "prop-types";
import QuestionCard from "./QuestionCard";

function ExecuteQuiz(props) {
  const { desiredQuiz } = props;

  const [score, setScore] = useState(0);
  const [qNumber, setQNumber] = useState(1);

  const [chosenAnswer, setChosenAnswer] = useState("");

  return (
    <>
      <div>{desiredQuiz.quizName}</div>
      <div>{desiredQuiz.description}</div>
      <div>
        Current Question:
        {' '}
        {qNumber}
        {' '}
        of
        {' '}
        {desiredQuiz.questions.length}
      </div>
      <div>
        Your score:
        {' '}
        {score}
        {' '}
        out of
        {' '}
        {desiredQuiz.questions.length}
      </div>
      <div>
        <QuestionCard
          score={score}
          setScore={setScore}
          qNumber={qNumber}
          setQNumber={setQNumber}
          chosenAnswer={chosenAnswer}
          setChosenAnswer={setChosenAnswer}
          question={desiredQuiz.questions[qNumber]}
        />
      </div>
    </>
  );
}

export default ExecuteQuiz;

ExecuteQuiz.propTypes = {
  desiredQuiz: PropTypes.func,
}.isRequired;

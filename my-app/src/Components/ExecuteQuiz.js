import React, { useState } from "react";
import PropTypes from "prop-types";
import QuestionCard from "./QuestionCard";
import "../Styles/ExecuteQuiz.css";

function ExecuteQuiz(props) {
  const { desiredQuiz } = props;

  const [score, setScore] = useState(0);
  const [qNumber, setQNumber] = useState(0);

  const [chosenAnswer, setChosenAnswer] = useState("");

  return (
    <div>
      {(((qNumber + 1) <= desiredQuiz.questions.length) && (
        <>
          <h1>{desiredQuiz.quizName}</h1>
          <h2>{desiredQuiz.description}</h2>
          <div className="question-count">
            Current Question: {qNumber + 1} of {desiredQuiz.questions.length}.
          </div>
          <div className="question-count">
            Your score: {score} out of {desiredQuiz.questions.length}.
          </div>
          <div className="question-card">
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
      )) || (
        <div>
          You have scored {score} out of {desiredQuiz.questions.length}!
        </div>
      )}
    </div>
  );
}

export default ExecuteQuiz;

ExecuteQuiz.propTypes = {
  desiredQuiz: PropTypes.shape({
    quizName: PropTypes.string,
    description: PropTypes.string,
    questions: PropTypes.arrayOf({
      question: PropTypes.string,
      correct_answer: PropTypes.string,
      answers: PropTypes.arrayOf({
        answer: PropTypes.string,
      }),
    }),
  }),
}.isRequired;

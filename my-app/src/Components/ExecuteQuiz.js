/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable object-shorthand */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import QuestionCard from "./QuestionCard";
import "../Styles/ExecuteQuiz.css";
import Context from "../Utils/Context";

function ExecuteQuiz(props) {
  const { desiredQuiz } = props;

  const [score, setScore] = useState(0);
  const [qNumber, setQNumber] = useState(0);

  const [chosenAnswer, setChosenAnswer] = useState("");

  const { isLoggedIn, userInfo } = useContext(Context);

  function handleSavedQuiz(quizId) {
    console.log(quizId);
    axios.post("http://localhost:4000/api/user/savedquizzes", {
      quizId: quizId,
      userId: userInfo.id,
      score: score,
    })
      .then(() => {
        console.log(quizId, userInfo.id, score);
      });
  }

  return (
    <div className="quiz-body">
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
        <>
          <div className="final-score">
            You have scored {score} out of {desiredQuiz.questions.length}!
          </div>
          <div>
            {(isLoggedIn && (
            <button type="submit" onClick={() => handleSavedQuiz(desiredQuiz._id, score)}>Save my score!</button>
            ))}
          </div>
        </>
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

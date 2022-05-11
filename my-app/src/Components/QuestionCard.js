/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import "../Styles/QuestionCard.css";

function QuestionCard(props) {
  const {
    question, setChosenAnswer, setScore, setQNumber, score, qNumber, chosenAnswer,
  } = props;

  // Below checks if the answer chosen by the user matches the
  // actual correct answer. If so, increments score by 1,
  // otherwise keeps it as it is. Also, the qNumber is increased
  // by 1 when an answer (correct or not) is selected.

  function checkAnswer() {
    if ((chosenAnswer === question.correct_answer)) {
      setScore(score + 1);
      setQNumber(qNumber + 1);
      setChosenAnswer("");
    } else if ((chosenAnswer === "")) {
      setScore(score);
      setQNumber(qNumber);
    } else if ((chosenAnswer !== question.correct_answer)) {
      setScore(score);
      setQNumber(qNumber + 1);
      setChosenAnswer("");
    }
  }

  checkAnswer(chosenAnswer);

  return (
    <div className="question-body">
      <div className="question-text">
        {question.question}
      </div>
      <div className="answers">
        <div><button type="submit" className="answer-button" onClick={() => setChosenAnswer(question.answers[0].a)}>{question.answers[0].a}</button></div>
        <div><button type="submit" className="answer-button" onClick={() => setChosenAnswer(question.answers[1].b)}>{question.answers[1].b}</button></div>
        <div><button type="submit" className="answer-button" onClick={() => setChosenAnswer(question.answers[2].c)}>{question.answers[2].c}</button></div>
        <div><button type="submit" className="answer-button" onClick={() => setChosenAnswer(question.answers[3].d)}>{question.answers[3].d}</button></div>
      </div>
    </div>
  );
}

export default QuestionCard;

QuestionCard.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    answers: PropTypes.arrayOf(
      { a: PropTypes.string, answer: PropTypes.string },
    ),
  }),
  chosenAnswer: PropTypes.string,
  setChosenAnswer: PropTypes.func,
  setScore: PropTypes.func,
  score: PropTypes.number,
  qNumber: PropTypes.number,
  setQNumber: PropTypes.func,
}.isRequired;

/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React, { useState } from "react";
import PropTypes from "prop-types";

function QuestionCard(props) {
  const { question, score, setScore } = props;
  console.log(score);
  console.log(setScore);
  console.log(question.correct_answer);

  const [chosenAnswer, setChosenAnswer] = useState("");

  // Below checks if the answer chosen by the user matches the
  // actual correct answer. If so, increments score by 1,
  // otherwise keeps it as it is.

  function checkAnswer() {
    if ((chosenAnswer === question.correct_answer)) {
      setScore(score + 1);
    } else if ((chosenAnswer === "")) {
      setScore(score);
    } else if ((chosenAnswer !== question.correct_answer)) {
      setScore(score);
    }
  }

  checkAnswer(chosenAnswer);
  console.log(chosenAnswer);

  return (
    <div>
      {question.question}
      <div className="answers">
        <button type="submit" onClick={() => setChosenAnswer(question.answers[0].a)}>{question.answers[0].a}</button>
        <button type="submit" onClick={() => setChosenAnswer(question.answers[1].b)}>{question.answers[1].b}</button>
        <button type="submit" onClick={() => setChosenAnswer(question.answers[2].c)}>{question.answers[2].c}</button>
        <button type="submit" onClick={() => setChosenAnswer(question.answers[3].d)}>{question.answers[3].d}</button>
      </div>
    </div>
  );
}

export default QuestionCard;

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  setScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

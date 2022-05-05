/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Styles/QuestionCard.css";

function QuestionCard(props) {
  const {
    question, score, setScore, qNumber, setQNumber,
  } = props;
  console.log("CurrentScore:", score);
  console.log("CurrentQNumber", qNumber);
  console.log(question.correct_answer);

  const [chosenAnswer, setChosenAnswer] = useState("");

  // Below checks if the answer chosen by the user matches the
  // actual correct answer. If so, increments score by 1,
  // otherwise keeps it as it is. Also, the qNumber is increased
  // by 1 when an answer (correct or not) is selected.

  function checkAnswer() {
    if ((chosenAnswer === question.correct_answer)) {
      setScore(score + 1);
      setQNumber(qNumber + 1);
    } else if ((chosenAnswer === "")) {
      setScore(score);
      setQNumber(qNumber);
    } else if ((chosenAnswer !== question.correct_answer)) {
      setScore(score);
      setQNumber(qNumber + 1);
    }
  }

  checkAnswer(chosenAnswer);
  console.log(chosenAnswer);

  return (
    <div>
      <div>
        {question.question}
      </div>
      <div className="answers">
        {/* When the buttons are pressed, they seem to remain pressed until a different one is
        pressed.So the way it is rendering now may allow the user to accrue an infinite score if
        they wanted. So the question needs to disappear after its been answered to stop the user
        from answering it multiple times.  */}
        <button type="submit" onClick={() => setChosenAnswer(question.answers[0].a)}>{question.answers[0].a}</button>
        <button type="submit" onClick={() => setChosenAnswer(question.answers[1].b)}>{question.answers[1].b}</button>
        <button type="submit" onClick={() => setChosenAnswer(question.answers[2].c)}>{question.answers[2].c}</button>
        {/* Fourth button still looping for some reason */}
        <button type="submit" onClick={() => setChosenAnswer(question.answers[3].d)}>{question.answers[3].d}</button>
      </div>
    </div>
  );
}

export default QuestionCard;

QuestionCard.propTypes = {
  question: PropTypes.string,
  setScore: PropTypes.func,
  score: PropTypes.number,
  qNumber: PropTypes.number,
  setQNumber: PropTypes.func,
}.isRequired;

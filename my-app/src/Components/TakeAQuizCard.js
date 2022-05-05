import React from "react";
import PropTypes from "prop-types";
import "../Styles/TakeAQuizCard.css";

function TakeAQuizCard({
  quizName, setDesiredQuiz, wholeQuiz,
}) {
  return (
    <div>
      <button type="submit" className="button-quiz" onClick={() => setDesiredQuiz(wholeQuiz)}>
        <div>{quizName}</div>
      </button>
    </div>
  );
}

export default TakeAQuizCard;

TakeAQuizCard.propTypes = {
  quizName: PropTypes.string,
  quizURL: PropTypes.string,
}.isRequired;

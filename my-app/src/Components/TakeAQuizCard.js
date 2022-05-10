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
  setDesiredQuiz: PropTypes.objectOf,
  wholeQuiz: PropTypes.shape({
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

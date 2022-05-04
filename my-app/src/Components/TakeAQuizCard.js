import React from "react";
import PropTypes from "prop-types";
import "../Styles/TakeAQuizCard.css";

function TakeAQuizCard({ quizName, quizURL }) {
  return (
    <div>
      <form action={`${quizURL}`}>
        <button type="submit" className="button-quiz">
          {quizName}
        </button>
      </form>
    </div>
  );
}

export default TakeAQuizCard;

TakeAQuizCard.propTypes = {
  quizName: PropTypes.string,
  quizURL: PropTypes.string,
}.isRequired;

import React from "react";
import PropTypes from "prop-types";
import "../Styles/TakeAQuizCard.css";

function TakeAQuizCard({ quizName, description, quizURL }) {
  return (
    <div>
      <form action={`${quizURL}`}>
        <button type="submit" className="button-quiz">
          <div>{quizName}</div>
          <div>{description}</div>
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

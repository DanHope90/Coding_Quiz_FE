import React from "react";
import PropTypes from "prop-types";

function TakeAQuizCard({ quizName, quizURL }) {
  return (
    <div>
      <form action={`${quizURL}`}>
        <button type="submit">
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

import React from "react";
import PropTypes from "prop-types";

function SavedQuizCard({ quizName, quizScore }) {
  return (
    <>
      <div>{quizName}</div>
      <div>
        {quizScore}
        {' '}
        / 10
      </div>
    </>
  );
}

export default SavedQuizCard;

SavedQuizCard.propTypes = {
  quizName: PropTypes.string,
  quizScore: PropTypes.number,
}.isRequired;

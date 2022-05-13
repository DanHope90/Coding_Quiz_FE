import React from "react";
import PropTypes from "prop-types";

function SavedQuizCard({ quizId, quizScore }) {
  return (
    <>
      <div>{quizId.quizName}</div>
      <div>
        {quizScore} / {quizId.questions.length}
      </div>
    </>
  );
}

export default SavedQuizCard;

SavedQuizCard.propTypes = {
  quizId: PropTypes.string,
  quizScore: PropTypes.number,
}.isRequired;

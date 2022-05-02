import React from "react";
import PropTypes from "prop-types";

function TestQuizCard({ quizData }) {
  return (
    <div>{quizData}</div>
  );
}

export default TestQuizCard;

TestQuizCard.propTypes = {
  quizData: PropTypes.object.isRequired,
};

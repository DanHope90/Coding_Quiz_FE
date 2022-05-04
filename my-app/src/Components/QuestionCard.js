import React from "react";
import PropTypes from "prop-types";

function QuestionCard(props) {
  const { question, answers, correctAnswer } = props;
  return (
    <div>
      {question.question}
    </div>
  );
}

export default QuestionCard;

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
};

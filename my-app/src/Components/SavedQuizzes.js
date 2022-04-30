import React from "react";
import PropTypes from "prop-types";
import SavedQuizCard from "./SavedQuizCard";
import data from "../Data/SavedQuizzes.json";

function SavedQuizzes() {
  const { quizzes } = data;
  return (
    <>
      <div>This is the Saved Quizzes Page</div>
      <div>
        {quizzes.map((quiz) => (
          <div key={quiz.quizName}>
            <SavedQuizCard quizName={quiz.quizName} quizScore={quiz.quizScore} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SavedQuizzes;

SavedQuizzes.propTypes = {
  quizName: PropTypes.string,
  quizScore: PropTypes.number,
}.isRequired;

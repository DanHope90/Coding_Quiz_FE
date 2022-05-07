import React from "react";
import PropTypes from "prop-types";
import SavedQuizCard from "./SavedQuizCard";
import data from "../Data/SavedQuizzes.json";
import "../Styles/SavedQuizzes.css";

function SavedQuizzes() {
  const { quizzes } = data;
  return (
    <>
      <div className="saved-quiz-body">This is the Saved Quizzes Page</div>
      <div className="saved-quizzes">
        {quizzes.map((quiz) => (
          <div key={quiz.quizName} className="indiv-quiz">
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

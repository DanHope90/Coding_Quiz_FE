import React from "react";
import PropTypes from "prop-types";
import TakeAQuizCard from "./TakeAQuizCard";
import data from "../Data/TakeQuizzes.json";
import "../Styles/TakeAQuiz.css";

function TakeAQuiz() {
  const { quizzes } = data;
  return (
    <>
      <div>This is the Take A Quiz Page</div>
      <div className="quiz-array">
        {quizzes.map((quiz) => (
          <div key={quiz.quizName} className="indiv.quiz">
            <TakeAQuizCard quizName={quiz.quizName} quizURL={quiz.quizURL} />
          </div>
        ))}
      </div>
    </>
  );
}

export default TakeAQuiz;

TakeAQuiz.propTypes = {
  quizName: PropTypes.string,
  quizURL: PropTypes.string,
}.isRequired;

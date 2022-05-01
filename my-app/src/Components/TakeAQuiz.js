import React from "react";
import PropTypes from "prop-types";
import TakeAQuizCard from "./TakeAQuizCard";
import data from "../Data/TakeQuizzes.json";

function TakeAQuiz() {
  const { quizzes } = data;
  return (
    <>
      <div>This is the Take A Quiz Page</div>
      <div>
        {quizzes.map((quiz) => (
          <div key={quiz.quizName}>
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

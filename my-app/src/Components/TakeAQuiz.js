/* eslint-disable no-console */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import TakeAQuizCard from "./TakeAQuizCard";
import "../Styles/TakeAQuiz.css";
import Context from "../Utils/Context";
import QuestionCard from "./QuestionCard";

function TakeAQuiz() {
  console.log(alert);

  const { availableQuizzes } = useContext(Context);
  console.log("Here are my available quizzes:", availableQuizzes);

  // Below employs an empty object to store our desired quiz.
  // useEffect makes an axios request to populate object with
  // the quiz we have chosen, using quizId as a prop passed down.

  // Below sets our quizURL. This may have to go away at some point,
  // it may be superfluous and more or less non-functional.

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/api/quizzes/${quizId}`)
  //     .then(() => setQuizURL(`http://localhost:4000/api/quizzes/${quizId}`))
  //     .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  // });

  // console.log(availableQuizzes && availableQuizzes[0].quizName);

  console.log(availableQuizzes[2].questions);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <div>This is the Take A Quiz Page</div>
      <div className="quiz-array">
        {availableQuizzes.map((quiz) => (
          <div key={quiz.id} className="indiv.quiz">
            <TakeAQuizCard
              quizName={quiz.quizName}
              description={quiz.description}
              quizId={quiz.id}
            />
          </div>
        ))}
      </div>
      <div>
        {availableQuizzes[2].questions.map((question) => {
          console.log("I am a question:", question);
          return (
            <div>
              <QuestionCard question={question} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TakeAQuiz;

TakeAQuiz.propTypes = {
  quizName: PropTypes.string,
  quizURL: PropTypes.string,
}.isRequired;

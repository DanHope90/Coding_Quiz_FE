/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import TakeAQuizCard from "./TakeAQuizCard";
import "../Styles/TakeAQuiz.css";

function TakeAQuiz(quizId) {
  // Below sets the initial alert.
  const initialState = {
    alert: { message: "", isSuccess: false },
  };

  const [alert, setAlert] = useState(initialState.alert);

  // Below employs an empty array to store all quizzes, useEffect makes an axios request
  // to populate said array with all quizzes. This may not be needed later.
  const [availableQuizzes, setAvailableQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/quizzes")
      .then(({ data }) => setAvailableQuizzes(data))
      .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  }, []);

  console.log(availableQuizzes);
  console.log(initialState);

  // Below employs an empty object to store our desired quiz.
  // useEffect makes an axios request to populate object with
  // the quiz we have chosen, using quizId as a prop passed down.

  const [desiredQuiz, setDesiredQuiz] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/quizzes/${quizId}`)
      .then(({ data }) => setDesiredQuiz(data))
      .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  });

  console.log(desiredQuiz);

  return (
    <>
      <div>This is the Take A Quiz Page</div>
      <div className="quiz-array">
        {availableQuizzes.map((quiz) => (
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

/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import axios from "axios";

function TestQuiz() {
  // Below sets the initial alert.
  const initialState = {
    alert: { message: "", isSuccess: false },
  };

  const [alert, setAlert] = useState(initialState.alert);

  // Below employs an empty array to store all quizzes, useEffect makes an axios request
  // to populate said array with all quizzes.
  const [availableQuizzes, setAvailableQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/quizzes")
      .then(({ data }) => setAvailableQuizzes(data))
      .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  }, []);

  console.log(availableQuizzes);
  console.log(initialState);

  return (
    <div>This is a test quiz!</div>
  );
}

export default TestQuiz;

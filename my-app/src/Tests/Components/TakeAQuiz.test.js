/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import axios from "axios";
import renderer from "react-test-renderer";
import TakeAQuiz from "../../Components/TakeAQuiz";
import Context from "../../Utils/Context";

test("renders the TakeAQuiz component correctly", () => {
  // Below employs an empty array to store all quizzes, useEffect makes an axios request
  // to populate said array with all quizzes.
  const [availableQuizzes, setAvailableQuizzes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/quizzes")
      .then(({ data }) => setAvailableQuizzes(data));
  }, []);
  const testRenderer = renderer.create(
    <Context.Provider value={{ availableQuizzes }}>
      <TakeAQuiz />
    </Context.Provider>,
  );
  expect(testRenderer).toMatchSnapshot();
});

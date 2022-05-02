/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import data from "../Data/TestQuiz.json";

function TestQuiz() {
  // The following are just to show that the static data file is being accessed properly
  // These lines will be removed later when live data is being used
  // console.log("Data:", data);
  // console.log("Data file length:", data.length);
  // for (let i = 0; i < data.length; i++) {
  // console.log("Indiv data:", data[i]);
  // console.log("Indiv question:", data[i].question);
  // console.log("Indiv answer_a:", data[i].answers.a);
  // console.log("Indiv answer_b:", data[i].answers.b);
  // console.log("Indiv answer_c:", data[i].answers.c);
  // console.log("Indiv answer_d:", data[i].answers.d);
  // console.log("Indiv correct? A:", data[i].correct_answers.a);
  // console.log("Indiv correct? B:", data[i].correct_answers.b);
  // console.log("Indiv correct? C:", data[i].correct_answers.c);
  // console.log("Indiv correct? D:", data[i].correct_answers.d);
  // }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswerButtonClick(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  const nextQuestion = currentQuestion + 1;

  return (
    <div>This is a test quiz!</div>
  );
}

export default TestQuiz;

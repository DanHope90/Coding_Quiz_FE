/* eslint-disable no-plusplus */
import React from "react";
import data from "../Data/TestQuiz.json";

function TestQuiz() {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }

  return (
  <div>This is a test quiz!</div>);
}

export default TestQuiz;

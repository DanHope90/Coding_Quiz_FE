/* eslint-disable no-console */
import React, { useContext } from "react";
import Context from "../Utils/Context";

function TestQuiz() {
  const { availableQuizzes } = useContext(Context);
  console.log(availableQuizzes);

  return (
    <>
      <div>{alert.message}</div>
      <div>This is a test quiz!</div>
    </>
  );
}

export default TestQuiz;

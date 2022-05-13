import React, { useContext } from "react";
import ExecuteQuiz from "./ExecuteQuiz";
import "../Styles/TakeAQuiz.css";
import Context from "../Utils/Context";

function RandomQuiz() {
  const { availableQuizzes } = useContext(Context);

  // Below presents a "Loading..." if the database isn't yet
  // accessed. It should only display for a second or two.
  if (!availableQuizzes || availableQuizzes.length === 0) {
    return <div>Loading....</div>;
  }

  const randomQuiz = availableQuizzes[Math.floor(Math.random() * availableQuizzes.length)];

  return (
    <>
      <div className="execute-quiz"><ExecuteQuiz desiredQuiz={randomQuiz} /></div>
      <div className="leave-random-quiz"><a href="/random-quiz"><button type="submit">Take me home!</button></a></div>
    </>
  );
}

export default RandomQuiz;

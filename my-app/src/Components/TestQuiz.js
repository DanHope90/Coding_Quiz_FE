/* eslint-disable no-console */
import React, { useState } from "react";
import data from "../Data/TestQuiz.json";

function TestQuiz() {
  // The following are just to show that the static data file is being accessed properly
  // These lines will be removed later when live data is being used
  console.log(data);
  console.log("quiz name:", data.quiz);
  console.log("quiz questions:", data.questions);
  console.log("quiz questions length:", data.questions.length);
  console.log("quiz first question:", data.questions[0].question);
  console.log("quiz first question answers:", data.questions[0].answers);
  console.log("quiz first question first answer:", data.questions[0].answers[0]);
  console.log("quiz first question first answer answer a:", data.questions[0].answers[0].answer);

  // Initially, line 25 will count which question the user is up to.
  // Line 26 will initially not allow the final score to be shown. Line 27 counts the score.
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function handleAnswerButtonClick(isCorrect) {
    // If isCorrect is true, score is increased by 1.
    if (isCorrect) {
      setScore(score + 1);
    }
    console.log("isCorrect:", isCorrect);

    const nextQuestion = currentQuestion + 1;
    console.log("nextQuestions:", nextQuestion);

    // If the end of the quiz is reached, the showScore is set to true.
    // Default is false, see line 25. Else the next question is shown.
    if (nextQuestion < data.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <>
      <div>This is a test quiz!</div>
      <div>{data.quiz}</div>
      <div>
        {showScore ? (
          <div>
            You scored
            {score}
            {' '}
            out of
            {data.length}
          </div>
        ) : (
          <>
            <div>
              {/* Tells the user which question they are up to. */}
              Question
              {' '}
              {currentQuestion + 1}
              {' '}
              of
              {' '}
              {data.questions.length}
            </div>
            <div>
              {/* Displays the actual question (eg. What is the symbol for multiplcation?) */}
              {data.questions[currentQuestion].question}
            </div>
            <div>
              {/* Displays the four answers as buttons
               and button checks if the "isCorrect" evaluates to true */}
              <button type="submit" onClick={() => handleAnswerButtonClick(data.questions[currentQuestion].answers[0](data.questions[currentQuestion].answers[0].isCorrect))}>{data.questions[currentQuestion].answers[0].answer}</button>
              <button type="submit">{data.questions[currentQuestion].answers[1].answer}</button>
              <button type="submit">{data.questions[currentQuestion].answers[2].answer}</button>
              <button type="submit">{data.questions[currentQuestion].answers[3].answer}</button>
            </div>
            <div />
          </>
        )}
      </div>

    </>
  );
}

export default TestQuiz;

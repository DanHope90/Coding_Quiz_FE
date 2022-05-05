/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import TakeAQuizCard from "./TakeAQuizCard";
import "../Styles/TakeAQuiz.css";
import Context from "../Utils/Context";
import QuestionCard from "./QuestionCard";

function TakeAQuiz() {
  const { availableQuizzes } = useContext(Context);
  const [desiredQuiz, setDesiredQuiz] = useState();

  console.log("All Quizzes:", availableQuizzes);
  console.log("My chosen/desired quiz:", desiredQuiz);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <div>This is the Take A Quiz Page</div>
      <div className="quiz-array">
        {availableQuizzes.map((quiz) => (
          <div key={quiz._id} className="indiv.quiz">
            <TakeAQuizCard
              quizName={quiz.quizName}
              description={quiz.description}
              quizId={quiz._id}
              wholeQuiz={quiz}
              setDesiredQuiz={setDesiredQuiz}
            />
          </div>
        ))}
      </div>
      <div>
        {availableQuizzes[2].questions.map((question) => (
          <div>
            <QuestionCard question={question} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TakeAQuiz;

TakeAQuiz.propTypes = {
  quizName: PropTypes.string,
  quizURL: PropTypes.string,
}.isRequired;

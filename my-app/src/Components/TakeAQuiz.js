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

  const [score, setScore] = useState(0);

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
        {(desiredQuiz && (
        <div>
          {desiredQuiz.questions.map((question) => (
            <div>
              <QuestionCard question={question} setScore={setScore} />
            </div>
          ))}
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

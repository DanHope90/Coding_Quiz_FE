/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import TakeAQuizCard from "./TakeAQuizCard";
import "../Styles/TakeAQuiz.css";
import Context from "../Utils/Context";
import ExecuteQuiz from "./ExecuteQuiz";

function TakeAQuiz() {
  const { availableQuizzes } = useContext(Context);

  // Below presents a "Loading..." if the database isn't yet
  // accessed. It should only display for a second or two.
  if ((availableQuizzes.length === 0)) {
    return <div>Loading....</div>;
  }

  const [desiredQuiz, setDesiredQuiz] = useState();

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
        {/* The ExecuteQuiz component only renders if desiredQuiz evaluates
        to a truthy; to do that, the user must select a quiz. */}
        {(desiredQuiz && (
          <div><ExecuteQuiz desiredQuiz={desiredQuiz} /></div>
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

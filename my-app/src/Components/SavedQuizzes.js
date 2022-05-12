/* eslint-disable no-underscore-dangle */
import React, { useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Context from "../Utils/Context";
import SavedQuizCard from "./SavedQuizCard";
import "../Styles/SavedQuizzes.css";

function SavedQuizzes() {
  const { userInfo, isLoggedIn } = useContext(Context);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/user/${userInfo.id}`)
      .then(({ data }) => setCompletedQuizzes(data.savedQuizzes))
      .catch((err) => console.log(err));
  }, []);

  const [completedQuizzes, setCompletedQuizzes] = useState();
  console.log(completedQuizzes);

  // const { _id, score } = completedQuizzes;

  return (
    <>
      <div className="saved-quiz-body">This is the Saved Quizzes Page</div>
      {/* <div className="saved-quizzes">
        {completedQuizzes.map((quiz) => (
          <div key={quiz._id} className="indiv-quiz">
            This is a quiz.
            <SavedQuizCard quizId={quiz._id} quizScore={quiz.score} />
          </div>
        ))}
      </div> */}
    </>
  );
}

export default SavedQuizzes;

// SavedQuizzes.propTypes = {
//   quizName: PropTypes.string,
//   quizScore: PropTypes.number,
// }.isRequired;

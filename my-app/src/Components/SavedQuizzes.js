/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Context from "../Utils/Context";
// import SavedQuizCard from "./SavedQuizCard";
import "../Styles/SavedQuizzes.css";

function SavedQuizzes() {
  const { userInfo, setAlert } = useContext(Context);

  console.log(userInfo);

  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/user/${userInfo.id}`)
      .then(({ data }) => setCompletedQuizzes(data.savedQuizzes))
      .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  }, []);

  // console.log(completedQuizzes);

  return (
    <div className="saved-quiz-body">This is the Saved Quizzes Page</div>
  );
}

export default SavedQuizzes;

// SavedQuizzes.propTypes = {
//   quizName: PropTypes.string,
//   quizScore: PropTypes.number,
// }.isRequired;

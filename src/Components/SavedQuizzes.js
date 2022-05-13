import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Context from "../Utils/Context";
import "../Styles/SavedQuizzes.css";

function SavedQuizzes() {
  const { userInfo, setAlert } = useContext(Context);

  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  useEffect(() => {
    axios.get(`https://dev-quiz-22.herokuapp.com/api/user/${userInfo.id}`)
      .then(({ data }) => setCompletedQuizzes(data.savedQuizzes))
      .catch(() => setAlert({ message: "Axios promise rejected", isSuccess: false }));
  }, []);

  // eslint-disable-next-line no-console
  console.dir(completedQuizzes);

  return (
    <div className="saved-quiz-body">This is the Saved Quizzes Page</div>
  );
}

export default SavedQuizzes;

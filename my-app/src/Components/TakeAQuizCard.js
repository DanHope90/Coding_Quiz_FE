import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../Styles/TakeAQuizCard.css";
import axios from "axios";

function TakeAQuizCard({
  quizName, description, quizId,
}) {
  const [quizIdentity, setQuizIdentity] = useState("");

  function handlerFunction() {
    setQuizIdentity(quizId);
  }

  console.log(quizIdentity);
  console.log(quizId);

  return (
    <div>
      {/* <form action="/test-quiz"> */}
      <button type="submit" className="button-quiz" onClick={handlerFunction}>
        <div>{quizName}</div>
        <div>{description}</div>
      </button>
      {/* </form> */}
    </div>
  );
}

export default TakeAQuizCard;

TakeAQuizCard.propTypes = {
  quizName: PropTypes.string,
  quizURL: PropTypes.string,
}.isRequired;

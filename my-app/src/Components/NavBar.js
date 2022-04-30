import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import questionmark from "../images/question-mark.jpg";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="q-mark-pic">
          <img src={questionmark} alt="question mark" />
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/">Home</Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/take-a-quiz">Take A Quiz</Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/saved-quizzes">Saved Quizzes</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

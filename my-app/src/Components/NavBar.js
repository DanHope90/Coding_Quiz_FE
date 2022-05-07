import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import { FaHome, FaSave, FaRocket } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import questionmark from "../Images/question-mark.jpg";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="q-mark-pic">
          <img src={questionmark} alt="question mark" />
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/">
            Home
            {' '}
            <FaHome />
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/take-a-quiz">Take A Quiz <FaRocket /></Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/saved-quizzes">Saved Quizzes <FaSave /></Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/test-quiz">Test Quiz on JavaScript <BiTestTube /></Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

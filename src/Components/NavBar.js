import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import { FaHome, FaSave, FaRocket } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { BsQuestionSquareFill } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";

function NavBar() {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="q-mark-pic">
          <BsQuestionSquareFill />
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/">Home <FaHome /></Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/take-a-quiz">Take Quiz <FaRocket /></Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/saved-quizzes">Saved Quizzes <FaSave /></Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/random-quiz">Random Quiz <BiTestTube /></Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-links-link" to="/leaderboard">Leaderboard <MdLeaderboard /></Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

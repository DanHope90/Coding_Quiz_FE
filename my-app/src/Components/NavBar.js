import React from "react";
import {Link} from "react-router-dom";
import "../Styles/NavBar.css";

function NavBar() {
    return(<div className="navbar">
        <ul className="navbar-links">
            <li className="navbar-links-item">
                <Link className="navbar-links-link" to="/">Take A Quiz</Link> 
            </li>
            <li className="navbar-links-item">
                <Link className="navbar-links-link" to="/">Saved Quizzes</Link> 
            </li>   
        </ul>        
    </div>)
}

export default NavBar;
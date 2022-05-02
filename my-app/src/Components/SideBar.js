import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link className="sidebar-links-link" to="/register">Register</Link>
        </li>
        <li className="sidebar-links-item">
          <Link className="sidebar-links-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;

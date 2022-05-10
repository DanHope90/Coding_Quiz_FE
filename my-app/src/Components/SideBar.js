import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SideBar.css";
import { FaRegIdCard, FaDoorOpen } from "react-icons/fa";

function SideBar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link className="sidebar-links-link" to="/register">Register <FaRegIdCard /></Link>
        </li>
        <li className="sidebar-links-item">
          <Link className="sidebar-links-link" to="/">Login <FaDoorOpen /></Link>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;

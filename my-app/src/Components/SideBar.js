import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/SideBar.css";
import { FaRegIdCard, FaDoorOpen, FaUserCircle } from "react-icons/fa";
import { BsDoorClosed } from "react-icons/bs";
import Context from "../Utils/Context";

function SideBar() {
  const {
    isLoggedIn,
    setIsLoggedIn,
    defaultUserInfo,
    userInfo,
    setUserInfo,
  } = useContext(Context);

  return (
    <div className="sidebar">
      {(!isLoggedIn && (
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <Link className="sidebar-links-link" to="/register">Register <FaRegIdCard /></Link>
        </li>
        <li className="sidebar-links-item">
          <Link className="sidebar-links-link" to="/">Login <FaDoorOpen /></Link>
        </li>
      </ul>
      ))}
      {(isLoggedIn && (
      <ul className="sidebar-links">
        <li className="sidebar-links-item">
          <div>{userInfo.userName}<FaUserCircle /></div>
        </li>
        <li className="sidebar-links-item">
          <button type="button" className="logout-button" onClick={() => [setIsLoggedIn(false), setUserInfo(defaultUserInfo)]}>Logout <BsDoorClosed /></button>
        </li>
      </ul>
      ))}
    </div>
  );
}
export default SideBar;

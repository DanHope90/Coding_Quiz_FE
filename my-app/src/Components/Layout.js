import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import "../Styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="upper-class">
      <div className="sidebar"><SideBar /></div>
      <div>{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;

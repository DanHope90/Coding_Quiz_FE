import React from "react";
import SideBar from "./SideBar";
import "../Styles/Layout.css";

function Layout({children}){
    return(
        <div className="upper-class"><div className="sidebar"><SideBar /></div><div>{children}</div></div>
    )
}

export default Layout;
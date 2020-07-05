import React from "react";
import SideNavDrawer from "../sideNav/SideNavDrawer";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = props => {
  return (
    <div>
      <header className="navbar fixed-top">
        <nav className="navbar-navigation ">
          <div className="navbar-toggle-button">
            <SideNavDrawer click={props.drawerClickHandler} />
          </div>
          <div className="navbar-logo">
            <a href="/">
              Ko<b style={{ color: "#14161f" }}>FiX</b>X
            </a>
          </div>
          <div className="spacer" />
          <div className="navbar-navigation-items">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/cafe"> Cafe </Link>
              </li>
              <li>
                <Link to="/Songs"> Coffee </Link>
              </li>
              <li>
                <Link to="/product"> Blog </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;

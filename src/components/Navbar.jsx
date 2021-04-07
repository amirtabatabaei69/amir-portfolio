import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="container">
            <Link to="/" className="logo">
              MY PORTFOLIO
            </Link>
            <ul>
              <li className="list">
                <Link to="/projects" className="link">
                  Projects
                </Link>
              </li>
              <li className="list">
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.styles.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="footer">
          <p>Created By Amir 2021</p>
          <ul>
            <li>
              <Link to="/">Linkedin</Link>
            </li>
            <li>
              <Link to="/">Github</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";

import "./Footer.styles.scss";

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="footer">
          <p>Created By Amir 2021</p>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amir-taba-825223167/">
                Linkedin
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="github.com/amirtabatabaei69">Github</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;

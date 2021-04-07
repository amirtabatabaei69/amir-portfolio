import React, { Component } from "react";
import "./Projects.styles.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="projects">
          <div className="project">
            <h3>MONOCHROME</h3>
            <a
              href="https://monochrome-ae70iflqa-amirtabatabaei69.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="img"
            >
              <div className="img-1"></div>
              <div className="img-2"></div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

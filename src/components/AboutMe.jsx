import React, { Component } from "react";
import "./AboutMe.styles.scss";
import about from "../img/about.jpg";

export class AboutMe extends Component {
  render() {
    return (
      <div className="container about-container">
        <h2 className="title">Me</h2>
        <div className="about-me">
          <img src={about} alt="" className="img" />
          <div className="content">
            <p>
              I’m a hard working and dedicated professional front-end developer
              with a keen eye for detail, and a determination to deliver the
              very highest quality. I take great pride in my work, and I always
              try to better myself with every project I work on. I like to write
              semantic, cross browser compatible code by hand that is
              re-useable, maintainable and easy to understand. I am motivated,
              enthusiastic and well organised. The main areas of my expertise
              are HTML(5), CSS(3) and JavaScript (native and jQuery) but I have
              basic knowledge of React and Redux.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

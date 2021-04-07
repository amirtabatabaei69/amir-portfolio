import React, { Component } from "react";
import "./ContactMe.styles.scss";

export class ContactMe extends Component {
  render() {
    return (
      <>
        <h3 className="heading">
          Let's Build <br /> Something Magical
        </h3>

        <div className="container">
          <div className="contact">
            <div className="magic"></div>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Your full name"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
              ></textarea>

              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactMe;

import React, { Component } from "react";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export class Contact extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ContactMe />
        <Footer />
      </>
    );
  }
}

export default Contact;

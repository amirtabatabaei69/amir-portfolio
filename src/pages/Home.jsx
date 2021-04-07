import React, { Component } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default Home;

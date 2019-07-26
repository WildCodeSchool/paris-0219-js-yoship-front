import React, { Component } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

class About1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <About />
        <Footer />
      </div>
    );
  }
}

export default About1;

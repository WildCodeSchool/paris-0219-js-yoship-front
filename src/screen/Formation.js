import React, { Component } from "react";
import Header from "../components/Header/Header";
import Formation from "../components/Login/StepFormation/Formation";
import Footer from "../components/Footer/Footer";

class StepFormation extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <Formation />
        <Footer />
      </div>
    );
  }
}

export default StepFormation;

import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Formation from "../components/Login/StepFormation/Formation";

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

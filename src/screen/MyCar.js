import React, { Component } from "react";
import Header from "../components/Header/Header";
import MyCars from "../components/MyCar/MyCars"
import Footer from "../components/Footer/Footer";

class MyCar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <MyCars />
        <Footer />
      </div>
    );
  }
}

export default MyCar;

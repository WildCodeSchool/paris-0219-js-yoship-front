import React, { Component } from "react";
import Header from "../components/Header/Header";
import DisplayCar from "../components/MyCar/DisplayCar"
import Footer from "../components/Footer/Footer";

class MyCarDisplay extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <DisplayCar />
        <Footer />
      </div>
    );
  }
}

export default MyCarDisplay;

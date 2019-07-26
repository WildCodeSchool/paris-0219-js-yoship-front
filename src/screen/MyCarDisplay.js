import React, { Component } from "react";
import DisplayCar from "../components/MyCar/DisplayCar"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

class MyCarDisplay extends Component {
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

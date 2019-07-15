import React, { Component } from "react";
import Header from "../components/Header/Header";
import FormCar from "../components/MyCar/FormCar";
import Footer from "../components/Footer/Footer";

class MyCar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <FormCar />
        <Footer />
      </div>
    );
  }
}

export default MyCar;

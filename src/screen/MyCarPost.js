

import React, { Component } from "react";
import FormCar from '../components/MyCar/FormCar';
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";

class MyCarPost extends Component {
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

export default MyCarPost;

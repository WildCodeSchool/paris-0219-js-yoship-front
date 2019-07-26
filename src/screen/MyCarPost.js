import React, { Component } from "react";
import FormCar from '../components/MyCar/FormCar';
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";
import { ToastContainer } from "react-toastify";

class MyCarPost extends Component {
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



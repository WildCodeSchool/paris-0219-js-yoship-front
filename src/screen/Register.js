import React, { Component } from "react";
import Register from "../components/RegisterForm/Register/Register";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

class Register1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default Register1;

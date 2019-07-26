import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Register from "../components/RegisterForm/Register/Register";

class Register1 extends Component {
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

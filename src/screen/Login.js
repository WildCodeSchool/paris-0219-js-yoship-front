import React, { Component } from "react";
import Login from "../components/Login/Login";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

class Login1 extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default Login1;

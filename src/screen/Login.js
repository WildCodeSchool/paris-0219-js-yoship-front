import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";

class Login1 extends Component {
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

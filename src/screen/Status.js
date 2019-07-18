import React, { Component } from 'react';
import Status from "../components/Login/Stepstatus/status";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

class Stepstatus extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <Status />
        <Footer />
      </div>
    );
  }
}

export default Stepstatus;

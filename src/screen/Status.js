import React, { Component } from 'react';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Status from "../components/Login/Stepstatus/status";

class Stepstatus extends Component {
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

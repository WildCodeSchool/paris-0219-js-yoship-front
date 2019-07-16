import React, { Component } from "react";
import Header from "../components/Header/Header";
import Profil from "../components/Monprofil/Profil/Profil";
import Footer from "../components/Footer/Footer";

class Monprofil extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <Profil />
        <Footer />
      </div>
    );
  }
}

export default Monprofil;

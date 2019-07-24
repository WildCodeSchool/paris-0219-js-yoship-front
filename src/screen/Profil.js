import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Profil from "../components/Monprofil/Profil/Profil";

class Monprofil extends Component {
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

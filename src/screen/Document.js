import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MesDocuments from "../components/Mesdocuments/MesDocuments";

class Document extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <MesDocuments />
        <Footer />
      </div>
    );
  }
}

export default Document;

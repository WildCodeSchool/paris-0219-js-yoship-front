import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

// Packages
import axios from "axios";

// Components
import Footer from "../../components/Footer/Footer";
import DriverList from "../../components/DriverList/DriverList";
import HeaderAdmin from "../../components/Header/HeaderAdmin";

// Import config
const config = require("../../config/config");

class AdminDashboard extends Component {
  state = {
  };

  render() {
      return (
        <div className="">
          <HeaderAdmin pathname={this.props.location.pathname} />
          <DriverList />
        </div>
      );
  }
}

export default AdminDashboard;

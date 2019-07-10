import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

// Packages
import axios from "axios";

// Components
import Footer from "../../components/Footer/Footer";
import DriverList from "../../components/DriverList/DriverList";

// Import config
const config = require("../../config/config");

class AdminDashboard extends Component {
  state = {
  };

  render() {
      return (
        <div className="">
          <DriverList />
        </div>
      );
  }
}

export default AdminDashboard;

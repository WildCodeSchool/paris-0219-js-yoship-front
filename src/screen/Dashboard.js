import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

// Packages
import axios from "axios";

// Components
import Footer from "../components/Footer/Footer";

// Import config
const config = require("../config/config");

class Dashboard extends Component {
  state = {
    authorized: false,
    isLoading: true
  };

  componentDidMount = () => {
    // Getting localStorage data
    const token = localStorage.getItem("token");
    const uuid = localStorage.getItem("uuid");

    if (this.state.isLoading) {
      axios({
        method: "Get",
        url: `http://localhost:${config.port}/users/${uuid}`,
        headers: {
          "x-access-token": `${token}`
        }
      })
        .then(res => {
          console.log(res);
          this.setState({
            isLoading: false,
            authorized: true,
            name: res.data[0].name
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            isLoading: false,
            authorized: false
          });
        });
    }
  };

  render() {
    const { authorized, name, isLoading } = this.state;
    if (!isLoading && authorized) {
      return (
        <div>
          <p>Welcome to the Dashboard !</p>
          <p>{name}</p>
          <Footer />
        </div>
      );
    } else {
      return <p>Loading...</p>
    }
    
  }
}

export default Dashboard;

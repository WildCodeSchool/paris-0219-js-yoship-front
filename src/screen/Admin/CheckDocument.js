import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';

// Packages
import axios from "axios";

// Components
import Footer from "../../components/Footer/Footer";
import DriverList from "../../components/DriverList/DriverList";

// Import config
const config = require("../../config/config");

class CheckDocument extends Component {
  state = {
  };
  componentDidMount() {
    const token = localStorage.getItem('token')  
    axios({
        method: "Get",
        url: `http://localhost:${config.port}/users/${this.props.match.params.uuid}/driverPapers`,
        headers: {
          "x-access-token": `${token}`
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        });
  }
  
  render() {
      console.log(this.props.location.documentProps)
      console.log(this.props)
      const { driverLicense, firstname, identityCard, mail, nSiret, name, phone, proofOfResidence, rib } = this.props.location.documentProps;
      return (
        <Card>
            <p>{firstname + " " + name}</p>
        </Card>
      );
  }
}

export default CheckDocument;

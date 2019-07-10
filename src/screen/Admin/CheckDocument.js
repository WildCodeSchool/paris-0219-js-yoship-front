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
      dataContact: [],
      dataDocuments: [],
      isLoading: true
  };
  componentDidMount() {
    this.getDataDriver()
  }

  getDataDriver = async () => {
    const uuid = this.props.match.params.uuid;
    const token = localStorage.getItem('token')  
    
    await axios({
        method: "Get",
        url: `http://localhost:${config.port}/users/${uuid}`,
        headers: {
          "x-access-token": `${token}`
        }
      })
        .then(res => {
            console.log(res.data[0]);
            const driver = res.data[0]
            this.setState({
                dataContact: {
                    firstname: driver.firstname, 
                    name: driver.name, 
                    mail: driver.mail, 
                    phone: driver.phone,
                    picture: driver.picture,
                    docVerified: driver.docVerified 
                }
            })
            // dataDrivers.push({
            //     firstname: driver.firstname, 
            //     name: driver.name, 
            //     mail: driver.mail, 
            //     phone: driver.phone 
            // })
          console.log(this.state.dataContact)
        })
        .catch(error => {
          console.log(error);
        });
    
        await axios({
            method: "Get",
            url: `http://localhost:${config.port}/users/${uuid}/driverPapers`,
            headers: {
              "x-access-token": `${token}`
            }
          }).then(res => {
            console.log(res.data);
            const driver = res.data
            this.setState({
                dataDocuments: {
                    identityCard: driver.identityCard, 
                    driverLicense: driver.driverLicense, 
                    proofOfResidence: driver.proofOfResidence,
                    rib: driver.rib, 
                    nSiret: driver.nSiret
                },
                isLoading: false
            })
            console.log(this.state.dataDocuments)
          }).catch(error => {
            console.log(error); 
          })
  }

  render() {
      console.log(this.props.location.documentProps)
      console.log(this.props)
      // General states
      const { isLoading } = this.state
      // Driver contact states
      const { firstname, mail, name, phone, docVerified } = this.state.dataContact;
      // Driver ocument states
      const { identityCard, driverLicense, proofOfResidence, rib, nSiret } = this.state.dataDocuments;

      if (!isLoading) {
          return (!docVerified ?
            (<Card><p>{firstname + " " + name}</p></Card>)
            :
            (<Redirect to="admin"></Redirect>)
          )
      } else {
          return <p>Loading...</p>
      }
  }
}

export default CheckDocument;

import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import CheckboxList from '../../components/CheckBoxList/CheckBoxList'

// Card UI Components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

// Other UI Components
import Button from '@material-ui/core/Button';

// Packages
import axios from "axios";
import './Admin.scss'

// Components
import Footer from "../../components/Footer/Footer";
import DriverList from "../../components/DriverList/DriverList";
import HeaderAdmin from "../../components/Header/HeaderAdmin";

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
          }).catch(error => {
            console.log(error); 
          })

        await axios({
          method: "Get",
          url: `http://localhost:${config.port}/uploads/${this.state.dataDocuments.identityCard}`,
          headers: {
            "x-access-token": `${token}`
          }
        }).then(res => {
          // console.log(res.data);
          this.setState({
              dataDocuments: {
                  identityCard: res.data
              },
              isLoading: false
          })
        }).catch(error => {
          console.log(error); 
        })
  }

  render() {
      // General states
      const { isLoading } = this.state
      // Driver contact states
      const { firstname, mail, name, phone, docVerified } = this.state.dataContact;
      // Driver ocument states
      const { identityCard, driverLicense, proofOfResidence, rib, nSiret } = this.state.dataDocuments;
      console.log(identityCard)
      if (!isLoading) {
          return !docVerified ? (
            <div>
              <HeaderAdmin pathname={this.props.location.pathname} />
              <div className="docs-card-container">
                <Card className="docs-card">
                  <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe">
                      {firstname[0] + name[0]}
                    </Avatar>
                  }
                    title={firstname + " " + name}
                    subheader={mail}
                    className="docs-card-header"
                  />
                  <CardContent className="docs-card-content">
                    <CheckboxList dataDocuments={this.state.dataDocuments} uuid={this.props.match.params.uuid}/>
                  </CardContent>
                </Card>
              </div>    
            </div>
          ) : (
            <Redirect to="admin" />
          );
      } else {
          return <p>Loading...</p>
      }
  }
}

export default CheckDocument;

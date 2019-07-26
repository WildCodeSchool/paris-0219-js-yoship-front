import React, { Component } from "react";

// Packages
import axios from "axios";
import MaterialTable from 'material-table'
import { NavLink, Redirect } from "react-router-dom";

// Components
import CheckButton from './CheckButton/CheckButton'
import Loader from '../UI/Loader/Loader'

import './DriverList.scss'
const moment = require('moment');

// Import config
const config = require("../../config/config");

class DriverList extends Component {
  state = {
    authorized: false,
    isLoading: true,
    driverData: [],
    driverDocs: []
  };

  componentDidMount = async () => {
    this.getDataDrivers();
  };

  getDataDrivers = async () => {
    // Getting localStorage data
    const token = localStorage.getItem("token");
    const uuid = localStorage.getItem("uuid");

    let dataDocs = [];
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/users'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/users'
    }
    await axios({
      method: "Get",
      url: `${pathApi}`,
      headers: {
        "x-access-token": `${token}`
      }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          driverData: res.data.map(driver => {
            driver.createdAt = moment(driver.createdAt).format("DD/MM/YYYY")
            return driver
          })
        });
      })
      .catch(error => {
        console.log(error);
      });

    const driversUuid = this.state.driverData.map(driver => driver.uuid)

    for (let i = 0; i < driversUuid.length; i++) {
      let pathApi = process.env.REACT_APP_PATH_API_DEV + '/users/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/users/'
    }
      await axios({
        method: "Get",
        url: `${pathApi}${this.state.driverData[i].uuid}/driverPapers`,
        headers: {
          "x-access-token": `${token}`
        }
      })
        .then(res => {
          if (this.state.driverData[i].docVerified) {
            dataDocs.push({...this.state.driverData[i], allUploaded: "Vérifié"}) 
          } else if ((res.data === "") || (res.data["driverLicense"] === null || res.data["identityCard"] === null || res.data["proofOfResidence"] === null || res.data["rib"] === null)) {
            dataDocs.push({...this.state.driverData[i], allUploaded: "En attente" }) 
          } else  {
            console.log(res.data["driverLicense"])
            dataDocs.push({...this.state.driverData[i],
              driverLicense: res.data.driverLicense,
              identityCard: res.data.identityCard,
              nSiret: res.data.nSiret,
              proofOfResidence: res.data.proofOfResidence,
              rib: res.data.rib,
              allUploaded: "A vérifier"
            })            
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    this.setState({
      driverDocs: dataDocs,
      isLoading: false
    })
    console.log(this.state.driverDocs)
  };

  render() {
    const { driverDocs, isLoading } = this.state;

    const columns = [
      { title: 'ID', field: 'id', cellStyle: { border: "none", fontWeight: "bold" }},
      { title: 'Nom de famille', field: 'name', cellStyle: { border: "none"} },
      { title: 'Prénom', field: 'firstname', cellStyle: { border: "none"} },
      { title: 'Date de création', field: 'createdAt', cellStyle: { border: "none"} },
      { title: "Statut", field: 'allUploaded', cellStyle: { border: "none"} }
    ]
    if (!isLoading) {
      console.log(driverDocs[1].allUploaded)

      return (
        <div className="table-container">
          <Loader triggerAnim={true} />
          <MaterialTable 
            title="Gestion des documents"
            columns={columns}
            data={driverDocs}
            actions={[{tooltip: 'Check user documents'}]}
            components={{
              Action: props => (
                console.log(props),
                  <CheckButton status={props.data.allUploaded} uuid={props.data.uuid} onClick={((event) => props.action.onClick(event, props.data))}>check</CheckButton>
              ),
            }}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              pageSize: 10,
              pageSizeOptions: [10],
              rowStyle: rowData => ({
                backgroundColor: ((rowData.tableData.id % 2) === 1 ? 'rgb(245, 245, 245)' : '#FFF'),
                border: 'none'
              }),
              headerStyle: {
                fontSize: '18px',
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.2) 5px 2px 18px -10px",
                margin: "auto auto"
              },
              actionsCellStyle: {
                border: 'none',
                texDecoration: 'none'
              }
            }}
          />
        </div>
      );  
    } else {
      return <Loader />
    }
  }
}

export default DriverList;

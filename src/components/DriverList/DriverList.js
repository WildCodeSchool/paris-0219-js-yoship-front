import React, { Component } from "react";
// Packages
import axios from "axios";
import MaterialTable from 'material-table'
import { NavLink, Redirect } from "react-router-dom";

// Components
import CheckButton from './CheckButton/CheckButton'

import './DriverList.scss'

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

    await axios({
      method: "Get",
      url: `http://localhost:${config.port}/users`,
      headers: {
        "x-access-token": `${token}`
      }
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          driverData: res.data.map(driver => driver)
        });
      })
      .catch(error => {
        console.log(error);
      });

    const driversUuid = this.state.driverData.map(driver => driver.uuid)

    for (let i = 0; i < driversUuid.length; i++) {
      await axios({
        method: "Get",
        url: `http://localhost:${config.port}/users/${this.state.driverData[i].uuid}/driverPapers`,
        headers: {
          "x-access-token": `${token}`
        }
      })
        .then(res => {
          console.log(res.data);
          // const allPapers = [res.data.driverLicense , res.data.identityCard , res.data.proofOfResidence , res.data.rib; 
          // console.log(allPapers)
          if (this.state.driverData[i].docVerified) {
            dataDocs.push({...this.state.driverData[i], allUploaded: "Vérifié"}) 
          } else if (res.data !== "") {
            dataDocs.push({...this.state.driverData[i],
              driverLicense: res.data.driverLicense,
              identityCard: res.data.identityCard,
              nSiret: res.data.nSiret,
              proofOfResidence: res.data.proofOfResidence,
              rib: res.data.rib,
              allUploaded: "A vérifier"
            })            
          } else {
            dataDocs.push({...this.state.driverData[i], allUploaded: "En attente" }) 
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
      { title: 'Nom de famille', field: 'name', cellStyle: {border: "none"} },
      { title: 'Prénom', field: 'firstname', cellStyle: {border: "none"} },
      { title: 'Date de création', field: 'createdAt', cellStyle: {border: "none"} },
      { title: "Statut", field: 'allUploaded', cellStyle: {border: "none"} },
    ]
    if (!isLoading) {
      console.log(driverDocs[1].allUploaded)

      return (
        <div className="table-container">
          <MaterialTable 
            title="Gestion des documents"
            columns={columns}
            data={driverDocs}
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => console.log(rowData)
              }
            ]}
            components={{
              Action: props => (
                console.log(props),
                <NavLink to={{pathname: `/documents/${props.data.uuid}`}}>
                  <CheckButton status={props.data.allUploaded} onClick={((event) => props.action.onClick(event, props.data))}>check</CheckButton>
                </NavLink>
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
                boxShadow: "rgba(0, 0, 0, 0.2) 5px 2px 18px -10px"
              }
            }}
          />
        </div>
      );  
    } else {
      return <p>Loading...</p>
    }
  }
}

export default DriverList;

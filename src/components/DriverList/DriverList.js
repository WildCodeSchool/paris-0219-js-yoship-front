import React, { Component } from "react";
// Packages
import axios from "axios";
import MaterialTable from 'material-table'

// Components
import Button from '../Button/Button'

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
          if (res.data !== "") {
            dataDocs.push({...this.state.driverData[i],
              driverLicense: res.data.driverLicense,
              identityCard: res.data.identityCard,
              nSiret: res.data.nSiret,
              proofOfResidence: res.data.proofOfResidence,
              rib: res.data.rib,
              allUploaded: "A vérifier"
            })            
          } else {
            dataDocs.push({...this.state.driverData[i], allUploaded: "En cours" }) 
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
    const { driverData, driverDocs, isLoading } = this.state;
    const columns = [
      { title: 'id', field: 'id' },
      { title: 'name', field: 'name' },
      { title: 'firstname', field: 'firstname' },
      { title: 'createdAt', field: 'createdAt' },
      { title: "Statut", field: 'allUploaded' },
    ]
    if (!isLoading) {
      console.log(driverDocs[1].allUploaded)

      return (
        <div className="table-container">
          <MaterialTable 
            title="Documents"
            columns={columns}
            data={driverDocs}
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              }
            ]}
            components={{
              Action: props => (
                <button onClick={((event) => props.action.onClick(event, props.data))}>check</button>
                // <Button
                //   text="Check"
                //   onClick={((event) => props.action.onClick(event, props.data))}
                // />
              ),
            }}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              rowStyle: rowData => ({
                backgroundColor: ((rowData.tableData.id % 2) === 1 ? '#EEE' : '#FFF')
              }),
              headerStyle: {
                fontSize: '18px'
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

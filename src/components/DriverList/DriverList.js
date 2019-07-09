import React, { Component } from "react";
// Packages
import axios from "axios";

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
            dataDocs.push({
              driverLicense: res.data.driverLicense,
              identityCard: res.data.identityCard,
              nSiret: res.data.nSiret,
              proofOfResidence: res.data.proofOfResidence,
              rib: res.data.rib,
              allUploaded: true
            })            
          } else {
            dataDocs.push({ allUploaded: false }) 
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

    if (!isLoading) {
      console.log(driverDocs[1].allUploaded)

      return (
        <div>
          {driverData
            .map( (driver, i) => {
              return (
                <div>
                  <p>{driver.uuid}</p>
                  <p>{driver.firstname}</p>
                  <p>{driver.name}</p>
                  <p>{driver.createdAt}</p>
                  {/* {console.log(i)}
                  {console.log(driverDocs[1])} */}
                  {
                    driverDocs[i].allUploaded ? 
                      <div>
                        <p>uploaded</p> 
                        <button>Check</button>
                      </div> 
                      : 
                      <div>
                        <p>not uploaded</p> 
                        <button disabled>Check</button>
                      </div>
                  }
                </div>
                );
            })}
          <button onClick={this.fetchData} />
        </div>
      );  
    } else {
      return <p>Loading...</p>
    }
  }
}

export default DriverList;

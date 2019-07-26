import React, { Component } from "react";

import { NavLink, Redirect } from "react-router-dom";

// Material UI List
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

// Icons
import IconButton from '@material-ui/core/IconButton';
import CloudDownload from '@material-ui/icons/CloudDownload';
import Print from '@material-ui/icons/Print';

// Other UI Components
import Button from '@material-ui/core/Button';

import axios from 'axios'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./CheckBoxList.scss"

// Import config
const config = require("../../config/config");
const download = require("downloadjs")
class CheckBoxList extends Component {
    state = {
        checkedItems: {
            "Carte d'identité": false,
            "Permis de conduire": false,
            "Certificat de domicile": false,
            "RIB": false,
            "Numéro de Siret": false
        },
        allChecked: false,
        redirect: false
    }
      
  handleChange(e) {
    let item = e.target.name;
    let isChecked = e.target.checked;

    let updatedItems = Object.assign({}, this.state.checkedItems, {[item]: isChecked})
    
    // Change state
    this.setState({
        checkedItems: updatedItems
    });
    const checked = (index) => { return document.querySelectorAll("input")[index].checked }
    if ((checked(1) && checked(2) && checked(3) && checked(4) && checked(5)) === true) {
        this.setState({
        allChecked: true
        });
    } else {
        this.setState({
        allChecked: false
        });
    }
  }

  checkAllItems() {
    this.setState(prevState => ({
        checkedItems: {
            "Carte d'identité": prevState.allChecked === false ? true : false,
            "Permis de conduire": prevState.allChecked === false ? true : false,
            "Certificat de domicile": prevState.allChecked === false ? true : false,
            "RIB": prevState.allChecked === false ? true : false,
            "Numéro de Siret": prevState.allChecked === false ? true : false
        },
        allChecked: !this.state.allChecked
      }));
  }

  postVerified = () => {
    const token = localStorage.getItem('token');
    const uuid = String(this.props.uuid); 
    let pathApi = process.env.REACT_APP_PATH_API_DEV + '/users/'
    if (process.env.NODE_ENV === 'production') {
      pathApi = process.env.REACT_APP_PATH_API_PROD + '/users/'
    }
    axios({
        method: "Put",
        url: `${pathApi}${uuid}`,
        headers: {
          "x-access-token": `${token}`
        },
        data: {
            docVerified: 1
        }
      })
        .then(res => {
            console.log(res)
            toast.success("Les documents ont été validé.", {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            this.setState({
               redirect: true
            })
        })
        .catch(error => {
          console.log(error);
          toast.error("Erreur lors de la confirmation des documents", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        });
  }

  //   console.log(documentsKeys[])
  render() {
    const { identityCard, driverLicense, proofOfResidence, rib, nSiret } = this.props.dataDocuments
    const { redirect } = this.state

    const checkboxes = [
        {
            name: "Carte d'identité",
            key: 0,
            value: identityCard
        },
        {
            name: "Permis de conduire",
            key: 1,
            value: driverLicense
        },
        {
            name: "Certificat de domicile",
            key: 2,
            value: proofOfResidence
        },
        {
            name: "RIB",
            key: 3,
            value: rib
        },
        {
            name: "Numéro de Siret",
            key: 4,
            value: nSiret
        }
      ];
      let pathApi = process.env.REACT_APP_PATH_API_DEV 
      if (process.env.NODE_ENV === 'production') {
        pathApi = process.env.REACT_APP_PATH_API_PROD 
      }
      if (!redirect) {
          return (
            <>
              <List>
                <ListItem>
                  <Checkbox
                    checked={this.state.allChecked}
                    onChange={this.checkAllItems.bind(this)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                  Sélectionner tout les documents
                </ListItem>
                {checkboxes.map(item => (
                  <ListItem
                    key={item.key}
                    onClick={this.handleChange.bind(this)}
                    style={{paddingLeft: "3em"}}
                    button
                  >
                    <Checkbox
                      name={item.name}
                      checked={this.state.checkedItems[item.name]}
                      onChange={this.handleChange.bind(this)}
                      value="checkedA"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                    <ListItemText primary={item.name} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="Comments" onClick={ () => {window.open(`${pathApi}/${item.value}`)}}>
                        <Print />
                      </IconButton>
                      <IconButton edge="end" aria-label="Comments" onClick={ () => {download(`${pathApi}/${item.value}`)}}> 
                        <CloudDownload color="primary" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
              <Button
                className="docs-button"
                variant="contained"
                color="primary"
                fullWidth={true}
                disabled={!this.state.allChecked}
                style={
                    {
                        backgroundColor: this.state.allChecked ? "green" : "lightgrey"
                    }
                }
                onClick={this.postVerified}
              >
                Valider les documents
              </Button>
            </>
          );
      } else {
          return <Redirect to="/admin" />
      }

  }
}

export default CheckBoxList;

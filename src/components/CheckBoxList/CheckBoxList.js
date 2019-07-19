import React, { Component } from "react";

import { NavLink, Redirect } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import FileViewer from 'react-file-viewer';


// Material UI DIALOG
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
import Pageview from '@material-ui/icons/Pageview';
import Print from '@material-ui/icons/Print';
import Close from '@material-ui/icons/Close';

// Other UI Components
import Button from '@material-ui/core/Button';

import axios from 'axios'

import "./CheckBoxList.scss"

// Import config
const config = require("../../config/config");

class CheckBoxList extends Component {
    state = {
        checkedItems: {
            'identityCard': false,
            'driverLicense': false,
            'proofOfResidence': false,
            'rib': false,
            'nSiret': false
        },
        allChecked: false,
        redirect: false
    }
      
  handleChange(e) {
    console.log(e.currentTarget.querySelector("input"))
    console.log(e.target)
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
            'identityCard': prevState.allChecked === false ? true : false,
            'driverLicense': prevState.allChecked === false ? true : false,
            'proofOfResidence': prevState.allChecked === false ? true : false,
            'rib': prevState.allChecked === false ? true : false,
            'nSiret': prevState.allChecked === false ? true : false
        },
        allChecked: !this.state.allChecked
      }));
  }

  postVerified = () => {
    const token = localStorage.getItem('token');
    const uuid = String(this.props.uuid); 
    console.log(uuid)
    axios({
        method: "Put",
        url: `http://localhost:${config.port}/users/${uuid}`,
        headers: {
          "x-access-token": `${token}`
        },
        data: {
            docVerified: 1
        }
      })
        .then(res => {
            console.log(res)
            this.setState({
               redirect: true
            })
        })
        .catch(error => {
          console.log(error);
        });
  }

  //   console.log(documentsKeys[])
  render() {
    const { identityCard, driverLicense, proofOfResidence, rib, nSiret } = this.props.dataDocuments
    const { redirect } = this.state

    const checkboxes = [
        {
            name: 'identityCard',
            key: 0,
            value: identityCard
        },
        {
            name: "driverLicense",
            key: 1,
            value: driverLicense
        },
        {
            name: "proofOfResidence",
            key: 2,
            value: proofOfResidence
        },
        {
            name: "rib",
            key: 3,
            value: rib
        },
        {
            name: "nSiret",
            key: 4,
            value: nSiret
        }
      ];
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
                </ListItem>
                {checkboxes.map(item => (
                  <ListItem
                    key={item.key}
                    onClick={this.handleChange.bind(this)}
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
                      <IconButton edge="end" aria-label="Comments">
                        <CloudDownload color="primary" />
                      </IconButton>
                      <IconButton edge="end" aria-label="Comments" onClick={this.openModal}>
                        <Pageview color="secondary" />
                      </IconButton>
                      <IconButton edge="end" aria-label="Comments">
                        <Print />
                      </IconButton>
                    </ListItemSecondaryAction>
                  <Dialog  fullScreen={true}
                    maxWidth="lg"
                    open={false}
                    // onClose={handleClose}
                    aria-labelledby="max-width-dialog-title"
                    >
                      {/* pg-viewer-wrapper */}
                    <DialogActions>
                      <DialogTitle>{item.name}</DialogTitle>
                      <IconButton edge="start" color="inherit"  aria-label="Close">
                        <Close />
                      </IconButton>
                    </DialogActions>
                    <DialogContent>
                    <FileViewer 
                    style={{ background: "grey", display: "flex", flexDirection: "column", alignItems: "center" }}
                    fileType="pdf" 
                    filePath={`http://localhost:${config.port}/uploads/identityCard-1563526351518.pdf`} 
                    />

                    </DialogContent>
                  </Dialog>
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
                Validate
              </Button>
            </>
          );
      } else {
          return <Redirect to="/admin" />
      }

  }
}

export default CheckBoxList;

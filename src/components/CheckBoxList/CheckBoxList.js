import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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
import color from "@material-ui/core/colors/green";




class CheckBoxList extends React.Component {
    state = {
        checkedItems: {
            'identityCard': false,
            'driverLicense': false,
            'proofOfResidence': false,
            'rib': false,
            'nSiret': false
        },
        allChecked: false
    }
      
  handleChange(e) {
    console.log(e.currentTarget.querySelector("input"))
    console.log(e.target)
    let item = e.target.name;
    let isChecked = e.target.checked;

    let updatedItems = Object.assign({}, this.state.checkedItems, {[item]: isChecked})
    
    // Find the checkbox input when you click on the whole card
    if (e.currentTarget.querySelector("input") !== null) {
        item = e.currentTarget.querySelector("input").name;
        isChecked = e.currentTarget.querySelector("input").checked;
        // Change state
        this.setState(prevState => ({
            checkedItems: {
                [item]: !this.state.checkedItems[item]
            }
          }));
    } else {
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

  onSubmit() {
      
  }

  //   console.log(documentsKeys[])
  render() {
    const { identityCard, driverLicense, proofOfResidence, rib, nSiret } = this.props.dataDocuments

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
      return (
        <List>
            <ListItem>
                <Checkbox checked={this.state.allChecked} onChange={this.checkAllItems.bind(this)} inputProps={{'aria-label': 'primary checkbox'}} />
            </ListItem>
            {checkboxes.map(item => (
                <ListItem key={item.key} onClick={this.handleChange.bind(this)} button>
                    <Checkbox name={item.name} checked={this.state.checkedItems[item.name]} onChange={this.handleChange.bind(this)} value="checkedA" inputProps={{   'aria-label': 'primary checkbox', }} />
                    <ListItemText primary={item.name}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="Comments">
                            <CloudDownload color="primary" />
                        </IconButton>
                        <IconButton edge="end" aria-label="Comments">
                            <Pageview color="secondary" />
                        </IconButton>
                        <IconButton edge="end" aria-label="Comments" >
                            <Print />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                ))
            }
        </List>
      );

  }
}

export default CheckBoxList;

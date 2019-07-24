import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Tab from '../Tab/Tab'
import LogoutButton from '../LogoutButton/LogoutButton';
class DriverNav extends Component {
    state = {  }
    render() { 
        return (
          <>
            <NavLink
              to="/earnings"
              activeClassName="selected"
              className={this.props.linkClass}
            >
              <Tab icon="wallet" tab="Mes revenus" />
            </NavLink>
            <NavLink
              to="/mycarprofil"
              activeClassName="selected"
              className={this.props.linkClass}
            >
              <Tab icon="car" tab="Véhicules" />
            </NavLink>
            <NavLink
              to="/document"
              activeClassName="selected"
              className={this.props.linkClass}
            >
              <Tab icon="folder-open" tab="Documents" />
            </NavLink>
            <NavLink
              to="/profil"
              activeClassName="selected"
              className={this.props.linkClass}
            >
              <Tab icon="user-circle" tab="Mon profil" />
            </NavLink>
            <LogoutButton />
          </>
        );
    }
}
 
export default DriverNav;



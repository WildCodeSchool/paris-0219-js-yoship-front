import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Tab from '../Tab/Tab'
import LogoutButton from '../LogoutButton/LogoutButton';

class AdminNav extends Component {
    state = {  }
    render() { 
        return (
            <>
            <NavLink
              to="/test"
              activeClassName="selected"
              className={this.props.linkClass}
            >
              <Tab icon="wallet" tab="Mes revenus" />
            </NavLink>
            <LogoutButton />
        
            </>
          );
    }
}
 
export default AdminNav;
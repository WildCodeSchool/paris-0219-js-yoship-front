import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Tab from '../Tab/Tab'

class PublicNav extends Component {
    state = {  }
    render() { 
        return (
            <> 
               
               <NavLink to="/status" activeClassName="selected" className={this.props.linkStatus} >
                    <Tab icon="user-plus" tab="Register" />
                </NavLink> 
             <NavLink to="/login" activeClassName="selected" className={this.props.linkClass} >
                    <Tab icon="user-tie" tab="Login" />
                </NavLink>
               
                <NavLink to="/tracking" activeClassName="selected" className={this.props.linkClass} >
                    <Tab icon="map-marker-alt" tab="Tracking" />
                </NavLink>
                <NavLink exact to="/apropos" activeClassName="selected" className={this.props.linkClass} >
                    <Tab icon="info-circle" tab="About" />
                </NavLink>
               
             
                <NavLink exact to="/questions"  activeClassName="selected" className={this.props.linkClass} >
           <Tab icon="question-circle" tab="FAQ" />
           </NavLink>
              </>
          );
    }
}
 
export default PublicNav;



import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Tab from '../Tab/Tab'

class PublicNav extends Component {
    state = {  }
    render() { 
        return (
            <> 
             <NavLink to="/login" activeClassName="selected" className={this.props.linkClass} >
                    <Tab icon="user-tie" tab="Se connecter" />
                </NavLink>
                  
                <NavLink to="/status" activeClassName="selected" className={this.props.linkStatus} >
                    <Tab icon="user-plus" tab="S'enregistrer" />
                </NavLink> 
                <NavLink to="/tracking" activeClassName="selected" className={this.props.linkClass} >
                    <Tab icon="map-marker-alt" tab="Tracking" />
                </NavLink>
                <NavLink exact to="/apropos" activeClassName="selected" className={this.props.linkClass} >
                    <Tab icon="info-circle" tab="A propos" />
                </NavLink>
               
             
                <NavLink exact to="/questions"  activeClassName="selected" className={this.props.linkClass} >
           <Tab icon="question-circle" tab="FAQ" />
           </NavLink>
              </>
          );
    }
}
 
export default PublicNav;



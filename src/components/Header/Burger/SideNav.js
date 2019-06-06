import React from 'react';
import './SideNav.scss';
import {NavLink } from 'react-router-dom';
import Tab from './Tab';

const SideNav = props => {
    let drawerClass = 'side-drawer';
    if (props.show) {
        drawerClass ='side-drawer open';
    }
    return (
    <nav className={drawerClass}>
        <ul>
            <li>
                <NavLink to="/tracking" >
                <Tab icon="map-marker-alt" tab="Tracking"/>
                </NavLink>
            </li>
            <li>
                <NavLink to="/login">
                <Tab icon="user-tie" tab="Login"/>
                </NavLink>
            </li>
            <li>
                <NavLink to="/register">
                <Tab icon="user-plus" tab="Register"/>
                </NavLink>
            </li>
        </ul>
    </nav>
    )
};

export default SideNav;
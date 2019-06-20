import React from 'react';
import { NavLink } from 'react-router-dom';

import BurgerButton from './BurgerButton';
import './Navbar.scss';
import Brand from '../Brand/Brand';

const Navbar = props => (
    <div className="toolbar">
        <div className="toolbar_navigation">
            <NavLink exact to="/">
                <Brand />
            </NavLink>
            <div className="toolbar_toggle-button">
                <BurgerButton click={props.drawerClickHandler} />
            </div>
        </div>
    </div>
);

export default Navbar;
import React from 'react';
import BurgerButton from './BurgerButton';
import './Navbar.scss';
import Brand from './Brand';

const Navbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <Brand />
            <div className="toolbar_toggle-button">
                <BurgerButton click={props.drawerClickHandler}/>
            </div>
            {/* <div className="toolbar_logo"><a href=""></a>The LOGO</div> */}
            {/* <div className="spacer"/> 
            <div className="toolbar_navigation_items"> */}
                {/* <ul>
                    <li>
                        <NavLink to="/tracking" activeClassName="selected" >
                        <Tab icon="map-marker-alt" tab="Tracking"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="selected"  >
                        <Tab icon="user-tie" tab="Login"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" activeClassName="selected"  >
                        <Tab icon="user-plus" tab="Register"/>
                        </NavLink>
                    </li>
                </ul> */}
            {/* </div> */}
        </nav>
    </header>
);

export default Navbar;
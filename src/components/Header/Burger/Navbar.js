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
        </nav>
    </header>
);

export default Navbar;
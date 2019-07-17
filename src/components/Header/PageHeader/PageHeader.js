import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../UI/Button/Button';

import './PageHeader.scss'

const PageHeader = () => (
    <>
        <header className="masthead">
            <h1>YOSHIP EXPERIENCE DELIVERY</h1>
            <h2>A new way of delivery for luxury brands and demanding clients.<br />
                This is not a simple package, this is an YoShip experience.</h2>
                <NavLink to="/status">
            <Button text="GET STARTED" />
            </NavLink>
        </header>
    </>
)
export default PageHeader;
         
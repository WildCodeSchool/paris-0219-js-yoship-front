import React, { Component } from "react";
import Header from './Header';
import './ResponsiveHeader.scss'
import BurgerButton from '../Contact/Burger/BurgerButton';

const ResponsiveHeader = () => {
    retrun (
        <div>
            <button><BurgerButton /></button>
            <div className='closed ? closedMenu : openMenu' />
        </div>
    )
}

export default ResponsiveHeader;
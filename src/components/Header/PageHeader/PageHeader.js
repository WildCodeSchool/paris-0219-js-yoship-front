import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../Button/Button';
import './PageHeader.scss'

const PageHeader = () => (
    <header className="masthead">
        <h1>YOSHIP EXPERIENCE DELIVERY</h1>
        <h2>Un nouveau mode de livraison pour les marques de luxe et les clients exigeants.<br />
            Ce n'est pas un simple paquet, c'est une expérience YoShip.</h2>
        <NavLink to="/status">
            <Button text="DEMARRER" />
        </NavLink>
    </header>
)
export default PageHeader;





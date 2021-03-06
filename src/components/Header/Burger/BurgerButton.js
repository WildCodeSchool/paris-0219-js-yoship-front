import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import './BurgerButton.scss';

library.add(faBars)

const BurgerButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <FontAwesomeIcon icon='bars' className="coloricon" />
    </button>
);
export default BurgerButton;



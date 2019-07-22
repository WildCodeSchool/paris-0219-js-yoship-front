import React from 'react';
import './CheckButton.scss';
import { Link, Redirect } from "react-router-dom";

import Button from '@material-ui/core/Button';

const CheckButton = ({ status, uuid }) => {
    switch(status) {
        case 'Vérifié':
            return <i class="fas fa-check-circle"></i>
        case 'A vérifier':
            return (
                <Button variant="contained" color="secondary" className="check-button">
                    <Link to={{pathname: `/documents/${uuid}`}}>Check</Link>
                </Button>
            )
        case 'En attente':
            return <Button variant="contained" color="secondary" disabled>Check</Button>
        default:
            alert("ERROR: NO STATUS, CHECK DRIVERLIST COMPONENT")
        break;
    }
}
export default CheckButton;

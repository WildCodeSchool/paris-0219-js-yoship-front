import React from 'react';
import './CheckButton.scss';

const CheckButton = ({ status }) => {
    switch(status) {
        case 'Vérifié':
            return <i class="fas fa-check-circle"></i>
        case 'A vérifier':
            return <button className="check-button">Check</button>
        case 'En attente':
            return <button className="check-button" disabled>Check</button>
        default:
            alert("ERROR: NO STATUS, CHECK DRIVERLIST COMPONENT")
        break;
    }
}
export default CheckButton;

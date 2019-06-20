import React from 'react';

import './Button.scss';


const Button = ({ text }) => {
    return (
        <div>

            <button className="login-button">{text}</button>

        </div>
    )
}
export default Button;

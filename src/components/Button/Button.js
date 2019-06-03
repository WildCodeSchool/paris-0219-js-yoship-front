import React from 'react';
import './Button.scss';

class Button extends React.Component {

    render() {
        return (
        <div>
            <p>
                <button className="login-button">SUBMIT FORM</button> 
            </p>
        </div>
        )
    }
}

export default Button;
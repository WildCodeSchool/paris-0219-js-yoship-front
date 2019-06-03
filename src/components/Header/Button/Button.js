import React from 'react';
import './Button.scss';



const Button = ({title}) => (
     <div className="div-btn">
          <button className="login-button">{title}</button>        
     </div>
     
 
)

export default Button;
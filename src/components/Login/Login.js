import React from 'react';
import './Login.scss';
import Button from '../Button/Button'

class Login extends React.Component {

    render() {
        return (
        
            
            <form className="container-form-login"> 
            {/* label + input + picto email */}  
            <p>
                <label className="label-email-login" for="email">Email adress</label><br />
                <div className="group-email"> 
            <p className="picto-mail">@</p><br />
            <input className="input-email-login" name="Email address" type="email" placeholder="Enter your email address" /></div>
            </p>
            {/* label + input + password */}  
            <p>
            <label className="label-password-login" for="password">Password</label><br />
            <input className="input-password-login" name="Password" type="text" placeholder="Enter your password"/>
            </p>
            {/* checkbox check me out  */}
            <p>
            <input className="input-checkbox-login" type="checkbox" /><label> Check me out</label><br/>
            </p>
            {/* boutton submt */}
            <span className="button-login"><Button /></span>
        </form>
       
        
        
        )
    }
}

export default Login;
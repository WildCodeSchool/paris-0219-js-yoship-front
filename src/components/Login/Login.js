import React from 'react';
import './Login.scss';
import Button from '../Button/Button'
import { Input, InputGroupAddon} from 'reactstrap';

class Login extends React.Component {

    render() {
        return (
        
            
            <form className="container-form-login"> 
            {/* label + input + picto email */}  
            <p>
                <label className="label-email-login" for="email">Email adress</label><br />
                <div className="group-email"> 
            <InputGroupAddon addonType="prepend">@</InputGroupAddon><br />
            <Input className="input-email-login" name="Email address" type="email" placeholder="Enter your email address" /></div>
            </p>
            {/* label + input + password */}  
            <p>
            <label className="label-password-login" for="password">Password</label><br />
            <Input className="input-password-login" name="Password" type="text" placeholder="Enter your password"/>
            </p>
            {/* checkbox check me out  */}
            <div className="group-check">
            <Input type="checkbox" /><label> Check me out</label><br/>
            </div>
            {/* boutton submt */}
            <span className="button-login"><Button text="SUBMIT"/></span>
        </form>
       
        
        
        )
    }
}

export default Login;
import React from 'react';
import './Register.scss';
import Button from '../../Button/Button';

class Register extends React.Component {

    render() {
        return (
            <form className="group-form-register">
                {/* label + input fisrt name */}
                <p>
                    <label className="label-first-register" for="first name">First name</label><br />
                    <input className="first-name-register" name="first name" type="text" placeholder="First name" /><br />
                </p>
                {/* label + input last-name */}
                <p>
                    <label className="label-last-register" for="Last name">Last name</label><br />
                    <input className="last-name-register" name="Last name" type="text" placeholder="Last name" /><br />
                </p>
                {/* label + input email */}
                <p>
                    <label className="label-email-register" for="Email">Email</label><br />
                    <input className="email-register" name="Email" type="text" placeholder="Email adress" /><br />
                </p>
                {/* label + input phone */}
                <p>
                    <label className="label-phone-register" for="phone">Phone number</label><br />
                    <input className="phone-register" name="Phone number" type="phone" placeholder="Phone number" /><br />
                </p>
                {/* label + input password */}
                <p>
                    <label className="label-password-register" for="password">Password</label><br />
                    <input className="password-register" name="Password" type="text" placeholder="Password" /><br />
                </p>
                {/* label + input password confirmation */}
                <p>
                    <label className="label-paswordcon-register" for="password">Password confirmation</label><br />
                    <input className="password-confirmation-register" name="Password confirmation" type="text" placeholder="Password confirmation" /><br />
                </p>
                {/* checkbox terms and conditions  */}
                <p className="checkbox-register">
                    <input type="checkbox" /><label> Agree to terms and conditions</label><br />
                </p>
                <span className="button-login"><Button /></span>
            </form>
        )
    }
}

export default Register;
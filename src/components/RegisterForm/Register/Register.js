import React from 'react';
import './Register.scss';
import Button from '../../Button/Button';
import { Input, Form} from 'reactstrap';

class Register extends React.Component {

    render() {
        return (
            <Form method="post" className="group-form-register">
                {/* label + input fisrt name */}
                <div className="group-form-container">
                <p>
                    <label className="label-first-register" for="first name">First name</label>
                    <Input className="first-name-register" name="first name" type="text" placeholder="First name" />
                </p>
                {/* label + Input last-name */}
                <p>
                    <label className="label-last-register" for="Last name">Last name</label>
                    <Input className="last-name-register" name="Last name" type="text" placeholder="Last name" />
                </p>
                {/* label + Input email */}
                <p>
                    <label className="label-email-register" for="Email">Email</label>
                    <Input className="email-register" name="Email" type="text" placeholder="Email adress" />
                </p>
                {/* label + Input phone */}
                <p>
                    <label className="label-phone-register" for="phone">Phone number</label>
                    <Input className="phone-register" name="Phone number" type="phone" placeholder="Phone number" />
                </p>
                {/* label + Input password */}
                <p>
                    <label className="label-password-register" for="password">Password</label>
                    <Input className="password-register" name="Password" type="text" placeholder="Password" />
                </p>
                {/* label + Input password confirmation */}
                <p>
                    <label className="label-paswordcon-register" for="password">Password confirmation</label>
                    <Input className="password-confirmation-register" name="Password confirmation" type="text" placeholder="Password confirmation" />
                </p>
                {/* checkbox terms and conditions  */}
                <p className="checkbox-register">
                    <Input type="checkbox" /><label> Agree to terms and conditions</label>
                </p>
                <span className="button-login"><Button /></span>
                </div>
            </Form>
        )
    }
}

export default Register;
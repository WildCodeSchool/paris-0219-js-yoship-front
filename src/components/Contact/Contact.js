import React from 'react';
import axios from 'axios';
import FrenchPhoneField from './FrenchPhoneField';
import './Contact.scss';
import logoPaperPlane from '../../assets/images/logoPaperPlane.svg';
import { InputGroup, InputGroupAddon, Input, FormGroup, CustomInput, Form } from 'reactstrap';

//const config = require('../../../config/config')

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }

    state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        status: '',
        client: '',
        driver: '',
        brand: '',
        else: '',
        message: '',
        statusArray: ['customer', 'driver', 'brand', 'someonelse' ]
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    statusChange = (event) => {
        this.setState({status: event.target.value});
    }

    submitForm(event) {
        event.preventDefault();

        axios.post("http://localhost:3012/contact", this.state)
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(this.state.lastname + 'Your message was submitted');
                }
            })
            .catch(e => {
                console.error(e);
                alert('Error sending');
            });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitForm} id="contact-wrapper">
                    <div className="contact-logo">
                        <img src={logoPaperPlane} className="logo-plane" alt="logo" />
                    </div>
                    <div className="contact-title"><h2>Contact us !</h2></div>

                    <Input
                        className="contact-firstname"
                        name="firstname"
                        placeholder="First name"
                        requiered="requiered"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleChange}
                    />

                    <Input
                        className="contact-lastname"
                        name="lastname"
                        placeholder="Last name"
                        type="text"
                        requiered="requiered"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />

                    <InputGroup
                        className="contact-email"
                    >
                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                        <Input
                            name="email"
                            placeholder="Email address"
                            type="email"
                            //requiered="requiered"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </InputGroup>

                    <span className="contact-phone"><FrenchPhoneField /></span>

                    <FormGroup className="contact-status">
                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect" onChange={this.statusChange} >
                            <option value="">Select your status : </option>>
                            <option value="customer">I am a privileged client</option>
                            <option value="driver">I am a Yoship driver</option>
                            <option value="brand">I am a Luxury brand</option>
                            <option value="someonelse">Someone else</option>
                        </CustomInput>
                    </FormGroup>

                    <FormGroup
                        className="contact-message">
                        <Input
                            type="textarea"
                            name="message"
                            id="exampleText"
                            placeholder="Write your message..."
                            rows={5}
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <input
                        className="contact-button"
                        type="Submit"
                        defaultValue="Send"
                    />
                </Form>
            </div>

        );
    }
}

export default Contact;
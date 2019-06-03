import React from 'react';
import axios from 'axios';
import FrenchPhoneField from './FrenchPhoneField';
import './Contact.scss';
import logoPaperPlane from '../../../assets/images/logoPaperPlane.svg';
import { InputGroup, InputGroupAddon, Input, FormGroup, CustomInput, Form } from 'reactstrap';

class Contact extends React.Component {
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
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
      
    submitForm(event) {
        event.preventDefault();

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
    
    const url = "url..." //url of API 

    axios(url, config)
        .then(res => {
        if (res.error) {
            alert(res.error);
        } else {
            alert(this.state.value + 'Your message was submitted');
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
                    <img src={logoPaperPlane} className="logo-plane" alt="logo"/>
                </div>
                <div className="contact-title"><h2>Contact us !</h2></div>
                
                <Input 
                    className="contact-firstname"
                    name="first name"
                    placeholder="Firstname"
                    requiered="requiered"
                    type="text"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    bsSize="sm" 
                />
  
                <Input
                    className="contact-lastname"
                    name="lastname"
                    placeholder="Last name"
                    type="text"
                    requiered="requiered"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    bsSize="sm" 
                />
                    
                <InputGroup size="sm" className="contact-email">
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                        <Input
                            name="email"
                            placeholder="Email address"
                            requiered="requiered"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                </InputGroup>
                
                <span className="contact-phone"><FrenchPhoneField /></span>
                
                <FormGroup className="contact-status">
                    <CustomInput bsSize="sm" type="select" id="exampleCustomSelect" name="customSelect">
                        <option selected="selected">Select your status : </option>>
                        <option value={this.state.value}>I am a privileged client</option>
                        <option value={this.state.value}>I am a Yoship driver</option>
                        <option value={this.state.value}>I am a Luxury brand</option>
                        <option value={this.state.value}>Someone else</option>
                    </CustomInput>
                </FormGroup>
                
                <FormGroup bsSize="sm"  size="sm" className="contact-message">
                    <Input 
                        bsSize="sm"
                        size="sm" 
                        type="textarea" 
                        name="text" 
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
                    value="Send" 
                />
            </Form>
        </div>
        
        );
    }
}
        
export default Contact;
import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import allTheActions from '../../../actions'
import { Input, Col, Container, Button, Progress } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Field, formInputData, formValidation } from 'reactjs-input-validator';
import ProfilMon from '../../Monprofil/MonProfil'
import axios from 'axios'
import { directiveLiteral } from '@babel/types';

const config = require('../../../config/config')

class ProfilUpdate extends React.Component {
    state = {

        redirect: false,
        loading: true,
        data: {}

    }


    getData = () => {
        const token = localStorage.getItem("token")
        const uuid = localStorage.getItem("uuid")
        axios({
            method: 'Get',
            url: `http://localhost:${config.port}/users/${uuid}`,
            headers: {
                'x-access-token': `${token}`
            }
        })
            .then(res => {
                const result = res.data[0]
                this.setState({ result, loading: false })
                console.log("getData", this.state)
            })

    }

    componentDidMount = () => {
        this.getData()
    }

    handlechange = (e) => {
        let resultCopy = this.state.result
        resultCopy[e.target.name] = e.target.value

        this.setState({
            result: resultCopy
        })
        // this.setState( () => ({
        //     result : {
        //         ...this.state.result,
        //         firstName: e.target.value
        //     }
        // }))

    }

    // handleChange = (event, inputValue, inputName, validationState, isRequired) => {
    //     const value = (event && event.target.value) || inputValue;
    //     const { data } = this.state;
    //     data[inputName] = { value, validation: validationState, isRequired };
    //     this.setState({
    //         data,
    //     })
    //     this.setState({ event })
    //     // if you want access to your form data
    //     const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
    //     // tells you if the entire form validation is true or false
    //     const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
    // }


    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const isFormValid = formValidation(this.state.data);

    //     if (isFormValid) {
    //         const data = this.state.data
    //         const dataToSend = {
    //             dateOfBirth: data.dateOfBirth.value,
    //             firstname: data.firstname.value,
    //             mail: data.mail.value,
    //             name: data.name.value,
    //             password: data.password.value,
    //             phone: data.phone.value,
    //             pseudo: data.pseudo.value,
    //             address: data.address.value,
    //             postcode: data.postcode.value,
    //             city: data.city.value,
    //             country: data.country.value,
    //             role: "driver"
    //         }

    //         axios.post(`http://localhost:${config.port}/register`, (dataToSend))
    //             .then(res => {
    //                 console.log(res);
    //                 console.log(res.data);
    //             })
    //         this.setState({ callAPI: true });
    //         this.setState({ redirect: true })

    //     } else {
    //         this.setState({ callAPI: true, shouldValidateInputs: !isFormValid });
    //     }
    // }

    // handleFiles = files => {
    //     console.log(files)
    // }

    render(

    ) {
        //const passwordValue = this.state.data.password && this.state.data.password.value;


        if (this.state.loading) {
            return (<div>Loading</div>)
        } else {
            console.log(this.state);
            return (
                <section id="register" className="register">
                    <Col xl="5" lg="5">
                        <fieldset>

                            <label htmlFor="firstName">Prénom :</label>

                            <input
                                type="text"
                                name="firstname"
                                onChange={this.handlechange}
                                value={this.state.result.firstname}
                            />
                            <label htmlFor="name">Nom :</label>

                            <input
                                type="text"
                                name="name"
                                onChange={this.handlechange}
                                value={this.state.result.name}
                            />

                            <label htmlFor="phone">Tel :</label>

                            <input
                                type="text"
                                name="phone"
                                onChange={this.handlechange}
                                value={this.state.result.phone}
                            />
                        </fieldset>


                    </Col>
                    <div className="not">
                        <div>
                            <Button type="submit" onClick={this.handleSubmit} className="button-login-submit">Valider mon formulaire</Button>
                        </div>
                    </div>

                </section>
            )
        }
    }
}



export default ProfilUpdate

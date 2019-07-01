import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Input, Col, Container, Button, Progress } from 'reactstrap';

import allTheActions from '../../../actions'

import './ProfilForm.scss';




class FormProfil extends Component {

  state = {

    lastName: '',
    globalLastName: '',

    firstName: '',
    globalFirstName: '',

    phone: '',
    globalphone: '',


    email: '',
    globalEmail: '',

    dateOfBirth: '',
    globalDateOfBirth: '',

    address: '',
    globalAddress: '',

    postCode: '',
    globalPostCode: '',

    city: '',
    globalCity: '',

    country: '',
    globalCountry: '',


  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  componentDidMount = () => { }

  handleFiles = files => {
    console.log(files)
  }
  render() {
    console.log(this)
    return (


      <section id="register" className="register">
        <Container>
          <div className="row align-items-center no-gutters mb-4 mb-lg-4">

           
              <Col xl="4" lg="4">
                <fieldset>

                  <label htmlFor="name">Nom :</label>

                  <input
                    type="text"
                    name="lastName"
                    onChange={this.changeHandler}
                    value={this.state.lastName}
                  />
                </fieldset>
              </Col>

              <Col xl="4" lg="4">
              <fieldset>
                <label htmlFor="name">Prénom :</label>
               
                  <input
                    type="text"
                    name="firstName"
                    onChange={this.changeHandler}
                    value={this.state.firstName}
                  />
                
                </fieldset>
                </Col>
                <Col xl="4" lg="4">  
                <fieldset> 
                
                  <label htmlFor="name">phone :</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={this.changeHandler}
                    value={this.state.phone}
                  />
                
                </fieldset>
                </Col>

                
                <Col xl="4" lg="4">
                <fieldset> 
                  <label htmlFor="name">Email Address :</label>

                  <input
                    type="text"
                    name="email"
                    onChange={this.changeHandler}
                    value={this.state.email}
                  />
                   </fieldset>
                </Col>

                <Col xl="4" lg="4">
                <fieldset> 
                  <label htmlFor="name">Date of birth :</label>

                  <input
                    type="text"
                    name="dateOfBirth"
                    onChange={this.changeHandler}
                    value={this.state.dateOfBirth}
                  />
                   </fieldset>
                </Col>
                <Col xl="4" lg="4">
                <fieldset> 
                  <label htmlFor="name">Address :</label>

                  <input
                    type="text"
                    name="address"
                    onChange={this.changeHandler}
                    value={this.state.address}
                  />
                   </fieldset>
                </Col>

                <Col xl="4" lg="4">
                <fieldset> 
                  <label htmlFor="name">Postcode :</label>

                  <input
                    type="text"
                    name="postCode"
                    onChange={this.changeHandler}
                    value={this.state.postCode}
                  />
                   </fieldset>
                </Col>

                <Col xl="4" lg="4">
                <fieldset> 
                  <label htmlFor="name">City :</label>

                  <input
                    type="text"
                    name="city"
                    onChange={this.changeHandler}
                    value={this.state.city}
                  />
                   </fieldset>
                </Col>
                <Col xl="4" lg="4">
                <fieldset> 
                  <label htmlFor="name">Country :</label>

                  <input
                    type="text"
                    name="country"
                    onChange={this.changeHandler}
                    value={this.state.country}
                  />
                   </fieldset>
                </Col>
                </div>
        </Container>
                <hr />

              
            
            <button onClick={() => this.props.formAction.form(this.state)}>Register</button>

      

      </section>



    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    formAction: bindActionCreators(allTheActions.formActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormProfil)










import React from 'react';
import {Col, Container, Card, CardImg, CardText,CardTitle,} from 'reactstrap';
import ImageUpload from '../ImageUpload'
import "./Profil.scss"
import ReactFileReader from 'react-file-reader';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../../../actions'

class Profil extends React.Component {

  state = {

    lastname: '',
    globalLastName: '',

    firstname: '',
    globalFirstName: '',



    phone: '',
    globalphone: '',


    email: '',
    globalEmail: '',

    dateOfBirth: '',
    globalDateOfBirth: '',

    addres: '',
    globalAddres: '',

    postCode: '',
    globalPostCode: '',

    city: '',
    globalCity: '',

    country: '',
    globalCountry: '',

    pseudo: '',
    globalPseudo: '',
    
    isNumeric: '',
    globalisNumeric: '',


  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  componentDidMount = () => { }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({

      globalLastName: `${this.state.lastName}`,
      globalFirstName: `${this.state.firstName}`,
      globalPhone: `${this.state.phone}`,
      globalEmail: `${this.state.email}`,
      globalDateOfBirth: `${this.state.dateOfBirth}`,
      globalAddres: `${this.state.addres}`,
      globalPostCode: `${this.state.postCode}`,
      globalCity: `${this.state.city}`,
      globalCountry: `${this.state.country}`,
      globalPseudo: `${this.state.pseudo}`,
      globalisNumeric: `${this.state.isNumeric}`,
    })
  }

  handleFiles = files => {
    console.log(files)
  }
  render() {
    return (
      <section id="project" className="project-section bg-light">
        <Container>
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">

            <Col xl="2" lg="2">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

                <ReactFileReader handleFiles={this.handleFiles}>
                  <button className='btn'>Upload</button>
                </ReactFileReader>
              </Card>
            </Col>

            <Col xl="5" lg="5">
              <CardTitle icon="user-plus" ><h4> {this.props.lastName} {this.props.firstName} (User ID:2323)</h4></CardTitle>
              <CardText icon="user-plus" >Your phone : {this.props.isNumeric}</CardText>
              <CardText icon="user-plus" >Email Addres : {this.props.email} </CardText>
              <CardText icon="user-plus" >Status :  </CardText>




            </Col>



          </div>
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">


            <Col xl="12" lg="12">
              <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Mes information</h4></CardTitle>
            </Col>


            <Col xl="4" lg="4">
              <CardText icon="user-plus" >Role :</CardText>
              <CardText icon="user-plus" >date of birth : {this.props.dateOfBirth} </CardText>
              <CardText icon="user-plus" >Password :</CardText>
              <CardText icon="user-plus">Pseudo : {this.props.pseudo}  </CardText>



            </Col>



            <Col xl="4" lg="4">
              <CardText icon="user-plus" >Addres : {this.props.address}</CardText>
              <CardText icon="user-plus" >Postcode : {this.props.postCode} </CardText>
              <CardText icon="user-plus" >City :  {this.props.city}</CardText>
              <CardText icon="user-plus" >Country : {this.props.country}</CardText>


            </Col>





            <Col xl="4" lg="4">

              <CardText icon="user-plus">
                <ReactFileReader handleFiles={this.handleFiles}>Identity card :
          <button className='btn'>Upload</button>
                </ReactFileReader>
              </CardText>

              <CardText icon="user-plus">
                <ReactFileReader handleFiles={this.handleFiles}>Proof of residence :
          <button className='btn'>Upload</button>
                </ReactFileReader>
              </CardText>

              <CardText icon="user-plus">
                <ReactFileReader handleFiles={this.handleFiles}>Rib :
          <button className='btn'>Upload</button>
                </ReactFileReader>
              </CardText>

              <CardText icon="user-plus">
                <ReactFileReader handleFiles={this.handleFiles}>Permis :
          <button className='btn'>Upload</button>
                </ReactFileReader>
              </CardText>


            </Col>
            <Col xl="12" lg="12">
              <CardText icon="user-plus" >Description :</CardText>
            </Col>


            <ImageUpload></ImageUpload>

          </div>
        </Container>





      </section>

    );
  }
}

const mapStateToProps = state => {
  return {
    lastName: state.formReducer.lastName,
    firstName: state.formReducer.firstName,
    phone: state.formReducer.phone,
    email: state.formReducer.email,
    dateOfBirth: state.formReducer.dateOfBirth,
    address: state.formReducer.address,
    postCode: state.formReducer.postCode,
    city: state.formReducer.city,
    country: state.formReducer.country
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil)
import React from 'react';
import { Col, Container, Card, CardImg, CardText, CardTitle, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactFileReader from 'react-file-reader';
import axios from 'axios'
import blacktiebrands from '../../assets/icons/blacktiebrands.svg'
import phonesquarealtsolid from '../../assets/icons/phonesquarealtsolid.svg'
import atsolid from '../../assets/icons/atsolid.svg'
import usertagsolid from '../../assets/icons/usertagsolid.svg'
import "./MyCars.scss"
import Loader from '../UI/Loader/Loader';

const moment = require('moment');

const config = require('../../config/config')

class DisplayCar extends React.Component {

  state = {
    loading: true,
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
        const result = res.data
        this.setState({ result, loading: false })
        console.log("getData", this.state)
      })

  }

  componentDidMount = () => {
    this.getData()
  }


  handleFiles = files => {
    console.log(files)
  }

  render() {
    if (this.state.loading) {
      return <Loader />
    } else {
      const data = this.state.result[0]
      const modelYearFormated = moment(this.props.modelYear).format("YYYY")
      return (
        <section id="project" className="project-section bg-light">
          <Loader triggerAnim={true} />
          <Container>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <Col xl="5" lg="5">
                <CardTitle><h4> <img src={blacktiebrands} className="phonesquarealtsolid" alt="logo" /> {data.name} {data.firstname} (User ID:2323)</h4></CardTitle>
                <CardText><img src={phonesquarealtsolid} className="phonesquarealtsolid" alt="logo" /> Your phone : {data.phone}</CardText>
                <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Email Addres : {data.mail} </CardText>
                <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo" /> Status : check </CardText>
              </Col>
            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Ma voiture</h4></CardTitle>
              </Col>
              <Col xl="4" lg="4">
                <CardText icon="user-plus" >Marque : {this.props.brand}</CardText>
                <CardText icon="user-plus" >Couleur :{this.props.color} </CardText>
                <CardText icon="user-plus" >Description :{this.props.description}</CardText>
                <CardText icon="user-plus" >Fuel: {this.props.fuel}  </CardText>
              </Col>
              <Col xl="4" lg="4">
                <CardText icon="user-plus" >Cheveaux : {this.props.horsepower}</CardText>
                <CardText icon="user-plus" >Kilomètrage : {this.props.kilometers} </CardText>
                <CardText icon="user-plus" >Immatriculation : {this.props.licencePlate}</CardText>
                <CardText icon="user-plus" >Année : {modelYearFormated}</CardText>
              </Col>
            </div>
            <Link to="/myCarUpdate" >
            </Link>
          </Container>
        </section>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    ...state.formReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayCar)























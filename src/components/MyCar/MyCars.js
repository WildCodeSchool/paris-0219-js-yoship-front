import React from 'react';
import { Col, Container, Card, CardImg, CardText, CardTitle, } from 'reactstrap';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import blacktiebrands from '../../assets/icons/blacktiebrands.svg'
import phonesquarealtsolid from '../../assets/icons/phonesquarealtsolid.svg'

import atsolid from '../../assets/icons/atsolid.svg'
import usertagsolid from '../../assets/icons/usertagsolid.svg'


import "./MyCars.scss"
import ReactFileReader from 'react-file-reader';
import axios from 'axios'



import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../../actions'

const config = require('../../config/config')

class MyCars extends React.Component {

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
      return (<div>Chargement</div>)
    } else {
      const data = this.state.result[0]
      return (
        <section id="project" className="project-section bg-light">
          <Container>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">

              <Col xl="2" lg="2">
                <Card>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />

                  <ReactFileReader handleFiles={this.handleFiles}>
                    <button className='btn'>Téléchargement</button>
                  </ReactFileReader>
                </Card>
              </Col>

              <Col xl="5" lg="5">
              <CardTitle><h4> <img src={blacktiebrands} className="phonesquarealtsolid" alt="logo" /> {data.name} {data.firstname} (Utilisateur ID:2323)</h4></CardTitle>
              <CardText><img src={phonesquarealtsolid} className="phonesquarealtsolid" alt="logo" /> Téléphone : {data.phone}</CardText>
              <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Mail : {data.mail} </CardText>
              <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo"/> Status : vérifié </CardText>
         

              </Col>



            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">


              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Ma voiture</h4></CardTitle>
              </Col>


              <Col xl="4" lg="4">
                <CardText icon="user-plus" >Marque : {/* {data.brand} */}</CardText>
                <CardText icon="user-plus" >Couleur :{/* {data.color}{this.props.dateOfBirth} */} </CardText>
                <CardText icon="user-plus" >Description du véhicule :{/* {data.description} */}</CardText>
                <CardText icon="user-plus">Carburant : {/*{data.fuel} */}  </CardText>

              </Col>



              <Col xl="4" lg="4">
                <CardText icon="user-plus" >Puissance fiscale :{/* {data.horsepower} */}</CardText>
                <CardText icon="user-plus" >Kilométrage : {/*{data.kilometers} */} </CardText>
                <CardText icon="user-plus" >Plaque d'immatriculation : {/* {data.license_plate} */}</CardText>
                <CardText icon="user-plus" >Année de mise en service : {/*{data.model_year} */}</CardText>


              </Col>
        
            </div>

            <Link to="/myCarUpdate" >
            <div className="MyCarsButton">   
         <Button text="Edite ta voiture"/>
         </div>
         </Link>
          </Container>
        </section>

      );
    }
  }
}

export default MyCars;
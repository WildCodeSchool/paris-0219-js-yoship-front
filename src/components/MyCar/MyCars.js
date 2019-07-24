import React from 'react';
import axios from 'axios'
import { Col, Container, Card, CardImg, CardText, CardTitle, } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactFileReader from 'react-file-reader';

import atsolid from '../../assets/icons/atsolid.svg'
import blacktiebrands from '../../assets/icons/blacktiebrands.svg'
import phonesquarealtsolid from '../../assets/icons/phonesquarealtsolid.svg'
import usertagsolid from '../../assets/icons/usertagsolid.svg'

import "./MyCars.scss"

import Button from '../Button/Button'
import CarCard from './CarCard'

const config = require('../../config/config')

class MyCars extends React.Component {
  _isMounted = false

  state = {
    loading: true,
    dataCar: []
  }

  getData = async () => {
    const token = localStorage.getItem("token")
    const uuid = localStorage.getItem("uuid")
    const res = await axios({
      method: 'Get',
      url: `http://localhost:${config.port}/users/${uuid}`,
      headers: {
        'x-access-token': `${token}`
      }
    })
    const result = res.data
    this.setState({ result, loading: false  })

    let resCar = await axios({
      method: 'Get',
      url: `http://localhost:${config.port}/users/${uuid}/cars`,
      headers: {
        'x-access-token': `${token}`
      }
    })
    const dataCar = resCar.data
    this.setState({ dataCar})
    console.log("getData", this.state)
  }

  componentDidMount = () => {
    this._isMounted = true
    this.getData()
  }


  handleFiles = files => {
    console.log(files)
  }

  componentWillUnmount() {
    this._isMounted = false;
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
                <CardTitle><h4> <img src={blacktiebrands} className="phonesquarealtsolid" alt="logo" /> {data.name} {data.firstname} (User ID:2323)</h4></CardTitle>
                <CardText><img src={phonesquarealtsolid} className="phonesquarealtsolid" alt="logo" /> Your phone : {data.phone}</CardText>
                <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Email Addres : {data.mail} </CardText>
                <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo" /> Status : check </CardText>


              </Col>



            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">


              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Mes voitures</h4></CardTitle>
              </Col>

            </div>
            {this.state.dataCar
              .map((car, index) => (
                <CarCard car={car} index={index} key={index} />
              ))}


            <Link to="/mycarpost" >
              <div className="MyCarsButton">
                <Button text="Rajoute une voiture" />
              </div>
            </Link>
          </Container>
        </section>

      );
    }
  }
}

export default MyCars;
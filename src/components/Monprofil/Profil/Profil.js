import React from 'react'
import { Col, Container, Card, CardImg, CardText, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import ReactFileReader from 'react-file-reader'
import axios from 'axios'
import Button from '../../UI/Button/Button';
import Tab from '../../Header/Tab/Tab'
import phonesquarealtsolid from '../../../assets/icons/phonesquarealtsolid.svg'
import atsolid from '../../../assets/icons/atsolid.svg'
import calendaraltregular from '../../../assets/icons/calendaraltregular.svg'
import usertagsolid from '../../../assets/icons/usertagsolid.svg'
import keysolid from '../../../assets/icons/keysolid.svg'
import addressbooksolid from '../../../assets/icons/addressbooksolid.svg'
import buildingsolid from '../../../assets/icons/buildingsolid.svg'
import citysolid from '../../../assets/icons/citysolid.svg'
import addresscardsolid from '../../../assets/icons/addresscardsolid.svg'
import caraltsolid from '../../../assets/icons/caraltsolid.svg'
import portraitsolid from '../../../assets/icons/portraitsolid.svg'
import blacktiebrands from '../../../assets/icons/blacktiebrands.svg'
import Loader from '../../UI/Loader/Loader'
import "./Profil.scss"


const config = require('../../../config/config')

class Profil extends React.Component {

  state = {
    loading: true,
  }

  getData = async () => {
    const token = localStorage.getItem("token")
    const uuid = localStorage.getItem("uuid")
    let res = await axios({
      method: 'Get',
      url: `http://localhost:${config.port}/users/${uuid}`,
      headers: {
        'x-access-token': `${token}`
      }
    })
    let result = res.data
    this.setState({ result, loading: false })
  }

  componentDidMount = () => {
    this.getData()
  }

  render() {
    if (this.state.loading) {
      return (<Loader />)
    } else {
      const data = this.state.result[0]
      return (
        <section id="project" className="project-section bg-light">
          <Loader triggerAnim={true} />
          <Container>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
           
              <Col xl="5" lg="5">
                <CardTitle><h4> <img src={blacktiebrands} className="phonesquarealtsolid" alt="logo" /> {data.name} {data.firstname} (Utilisateur ID:2323)</h4></CardTitle>
                <CardText><img src={phonesquarealtsolid} className="phonesquarealtsolid" alt="logo" /> Numéro de téléphone : {data.phone}</CardText>
                <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Mail : {data.mail} </CardText>
                <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo" /> Statut :  </CardText>
              
              </Col>
            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Mes informations</h4></CardTitle>
              </Col>
              <Col xl="4" lg="4">
                <CardText ><img src={caraltsolid} className="phonesquarealtsolid" alt="logo" /> Rôle : {data.role} </CardText>
                <CardText><img src={portraitsolid} className="phonesquarealtsolid" alt="logo" /> Pseudo : {data.pseudo}  </CardText>
                <CardText><img src={keysolid} className="phonesquarealtsolid" alt="logo" /> Mot de passe : **********</CardText>
                <CardText><img src={calendaraltregular} className="phonesquarealtsolid" alt="logo" /> Date de naissance : {data.dateOfBirth}{this.props.dateOfBirth} </CardText>
              </Col>
              <Col xl="4" lg="4">
                <CardText><img src={addresscardsolid} className="phonesquarealtsolid" alt="logo" /> Adresse :{data.address} </CardText>
                <CardText><img src={addressbooksolid} className="phonesquarealtsolid" alt="logo" /> Code Postal : {data.postcode} </CardText>
                <CardText><img src={buildingsolid} className="phonesquarealtsolid" alt="logo" /> Ville :  {data.city} </CardText>
                <CardText><img src={citysolid} className="phonesquarealtsolid" alt="logo" /> Pays :{data.country} </CardText>
              </Col>
            </div>
            <Link to="/ProfilUpdate" >
<div className="buttoncenter"> 
              <Button text="Edite ton profil" />
</div> 
            </Link>


          </Container>
        </section>
      );
    }
  }
}
export default Profil






















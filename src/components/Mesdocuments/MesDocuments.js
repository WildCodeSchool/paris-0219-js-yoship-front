import React from 'react';
import { Col, Container, Card, CardImg, CardText, CardTitle, Input, Button } from 'reactstrap';
import axios from 'axios'
import ReactFileReader from 'react-file-reader';
import blacktiebrands from '../../assets/icons/blacktiebrands.svg'
import phonesquarealtsolid from '../../assets/icons/phonesquarealtsolid.svg'
import atsolid from '../../assets/icons/atsolid.svg'
import usertagsolid from '../../assets/icons/usertagsolid.svg'
import Loader from '../UI/Loader/Loader'

import "./MesDocuments.scss"

const config = require('../../config/config')


class Mesdocuments extends React.Component {

  state = {
    result: [],
    loading: true,
    selectFile: '',
    dataPapers: ''
  }

  getDataPapers = () => {
    const uuid = localStorage.getItem("uuid")
    const token = localStorage.getItem("token")
    axios({
      method: "GET",
      url: `http://localhost:${config.port}/users/${uuid}/driverPapers`,
      headers: {
        "x-access-token": token
      }
    })
      .then(res => {
        this.setState({
          dataPapers: res.data[0]
        })
      }).catch(res => {
        console.log(res)
      })
  }

  changeHandler = async (event) => {
    await this.setState({
      selectFile: event.target.files[0]
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const uuid = localStorage.getItem("uuid")
    const token = localStorage.getItem("token")
    const fileType = event.target.name
    const formData = new FormData()
    formData.append(fileType, this.state.selectFile)
    // Checking if the user already has a document table
    let hasDocuments;
    await axios
      .get(`http://localhost:${config.port}/users/${uuid}/driverPapers`, {
        headers: { "x-access-token": token }
      })
      .then(res => {
        hasDocuments = res.data;
        return hasDocuments;
      })
      .catch(err => console.log(err));

    if (hasDocuments === "") {
      await this.postDocument(uuid, token, formData);
    } else {
      await this.updateDocument(uuid, token, fileType, formData);
    }
  }

  postDocument(uuid, token, formData) {
    axios({
      method: "POST",
      url: `http://localhost:${config.port}/users/${uuid}/driverPapers`,
      headers: {
        "x-access-token": token
      },
      data: formData
    })
      .then(res => {
        console.log("le res", res);
        console.log("le res.data", res.data);
      })
      .catch(error => {
        console.log(error.response)
      });
  }

  updateDocument(uuid, token, fileType, formData) {
    axios({
      method: "PUT",
      url: `http://localhost:${config.port}/users/${uuid}/driverPapers/${fileType}`,
      headers: {
        "x-access-token": token
      },
      data: formData
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response)
      });
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
        console.log(this.state)
      })
  }

  componentDidMount = () => {
    this.getData()
    this.getDataPapers()
  }

  render() {
    if (this.state.loading) {
      return <Loader />
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
                <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Adresse e-mail : {data.mail} </CardText>
                <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo" /> Statut : vérifié </CardText>
              </Col>
            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <Col xl="12" lg="12">
                <CardTitle
                  className="cardtitleinformation"
                  icon="user-plus"
                >
                  <h4> Mes Documents</h4>
                </CardTitle>
              </Col>

            </div>

          </Container>


          <Container>
            <div className="align-items-center no-gutters mb-4 mb-lg-5">

              <form className="FormUpdate" encType="multipart/form-data" method="PUT" >

                <Col className="ColUpdate" xl="6" lg="6">
                  <label htmlFor="identityCard"> Piéce d'identité  </label>
                  <Input className="input-password-login" type="file" name="identityCard" onChange={this.changeHandler} />

                  <Button className="buttondeco" type="button" name="identityCard" onClick={this.handleSubmit}>Télécharger </Button>
                </Col>

                <Col className="ColUpdate" xl="6" lg="6">
                  <label htmlFor="proofOfResidence"> Justificatif de domicile  </label>
                  <Input type="file" name="proofOfResidence" onChange={this.changeHandler} />
                  <Button className="buttondeco" type="button" name="proofOfResidence" onClick={this.handleSubmit}>Télécharger</Button>
                </Col>

                <Col className="ColUpdate" xl="6" lg="6">
                  <label htmlFor="rib"> R.I.B </label>

                  <Input type="file" name="rib" onChange={this.changeHandler} />
                  <Button className="buttondeco" type="button" name="rib" onClick={this.handleSubmit}>Télécharger</Button>
                </Col>
                <Col className="ColUpdate" xl="6" lg="6">
                  <label htmlFor="driverLicense"> Permis de conduire </label>
                  <Input type="file" name="driverLicense" onChange={this.changeHandler} />
                  <Button className="buttondeco" type="button" name="driverLicense" onClick={this.handleSubmit}>Télécharger</Button>
                </Col>
              </form>
            </div>
          </Container>
        </section>














      );
    }
  }
}
export default Mesdocuments



















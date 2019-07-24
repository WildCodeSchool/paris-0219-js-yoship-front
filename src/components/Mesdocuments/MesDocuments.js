import React from 'react';
import { Col, Container, Card, CardImg, CardText, CardTitle, } from 'reactstrap';
import axios from 'axios'
import ReactFileReader from 'react-file-reader';
import blacktiebrands from '../../assets/icons/blacktiebrands.svg'
import phonesquarealtsolid from '../../assets/icons/phonesquarealtsolid.svg'
import atsolid from '../../assets/icons/atsolid.svg'
import usertagsolid from '../../assets/icons/usertagsolid.svg'
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
      return (<div>chargement</div>)
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
                    <button className='btn'>Télécharger</button>
                  </ReactFileReader>
                </Card>
              </Col>
              <Col xl="5" lg="5">
                <CardTitle><h4> <img src={blacktiebrands} className="phonesquarealtsolid" alt="logo" /> {data.name} {data.firstname} (Utilisateur ID:2323)</h4></CardTitle>
                <CardText><img src={phonesquarealtsolid} className="phonesquarealtsolid" alt="logo" /> Numéro de téléphone : {data.phone}</CardText>
                <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Adresse e-mail : {data.mail} </CardText>
                <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo" /> Statut : vérifié </CardText>
              </Col>
            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Mes Documents</h4></CardTitle>
              </Col>



              <form encType="multipart/form-data" method="PUT" >
               
                <input type="file" name="identityCard" onChange={this.changeHandler} />
                <button type="button" name="identityCard" className="btn btn-success btn-block" onClick={this.handleSubmit}>Télécharger</button>

                <input type="file" name="proofOfResidence" onChange={this.changeHandler} />
                <button type="button" name="proofOfResidence" className="btn btn-success btn-block" onClick={this.handleSubmit}>Télécharger</button>

                <input type="file" name="rib" onChange={this.changeHandler} />
                <button type="button" name="rib" className="btn btn-success btn-block" onClick={this.handleSubmit}>Télécharger</button>

                <input type="file" name="driverLicense" onChange={this.changeHandler} />
                <button type="button" name="driverLicense" className="btn btn-success btn-block" onClick={this.handleSubmit}>Télécharger</button>
                
              </form>
            </div>
          </Container>
        </section>
      );
    }
  }
}
export default Mesdocuments



















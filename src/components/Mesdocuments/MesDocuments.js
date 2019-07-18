import React from 'react';
import { Col, Container, Card, CardImg, CardText, CardTitle, } from 'reactstrap';
import ImageUpload from '../Monprofil/ImageUpload'
import "./MesDocuments.scss"
import ReactFileReader from 'react-file-reader';
import blacktiebrands from '../../assets/icons/blacktiebrands.svg'
import phonesquarealtsolid from '../../assets/icons/phonesquarealtsolid.svg'

import atsolid from '../../assets/icons/atsolid.svg'
import usertagsolid from '../../assets/icons/usertagsolid.svg'

import axios from 'axios'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../../actions'
import { log } from 'util';


const config = require('../../config/config')

class Mesdocuments extends React.Component {

  state = {
    result: [],
    loading: true,
    selectFile:'',
    identity:''
  }
    getIdentity = () => {
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
        console.log(res.data[0].identityCard)
        this.setState({
          identity: res.data[0].identityCard
        })
      })
    }


  changeHandler = async (event) => {
    await this.setState({
     selectFile: event.target.files[0]
    })
    console.log(this.state.selectFile)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const uuid = localStorage.getItem("uuid")
    const token = localStorage.getItem("token")
    const fileType = event.target.name
    const formData = new FormData()
    formData.append(fileType,this.state.selectFile)
    axios({
      method: "PUT",
      url: `http://localhost:${config.port}/users/${uuid}/driverPapers/${fileType}`,
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
    this.getIdentity()
    console.log(this.state.identity)
  }




  render() {
    if (this.state.loading) {
      return (<div>loading</div>)
    } else {
      const data = this.state.result[0]
      // const dataDrivers = this.state.dataDrivers[0]
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
                <CardTitle><h4> <img src={blacktiebrands} className="phonesquarealtsolid" alt="logo" /> {data.name} {data.firstname} (User ID:2323)</h4></CardTitle>
                <CardText><img src={phonesquarealtsolid} className="phonesquarealtsolid" alt="logo" /> Your phone : {data.phone}</CardText>
                <CardText><img src={atsolid} className="phonesquarealtsolid" alt="logo" /> Email Addres : {data.mail} </CardText>
                <CardText><img src={usertagsolid} className="phonesquarealtsolid" alt="logo"/> Status : check </CardText>
              </Col>



            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">


              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Mes Documents</h4></CardTitle>
              </Col>



              <Col xl="4" lg="4">
              <form enctype="multipart/form-data" method="PUT" >
               
                <input type="file" name="identityCard" onChange={this.changeHandler} />
                <button type="button" name="identityCard" className="btn btn-success btn-block" onClick={this.handleSubmit}>Upload</button>

                <input type="file" name="proofOfResidence" onChange={this.changeHandler} />
                <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit}>Upload</button>

                <input type="file" name="rib" onChange={this.changeHandler} />
                <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit}>Upload</button>

                <input type="file" name="driverLicense" onChange={this.changeHandler} />
                <button type="button" className="btn btn-success btn-block" onClick={this.handleSubmit}>Upload</button>
              </form>
              </Col>
            
            </div>
            <div>
              <p>{this.state.identity}</p>
              
            </div>
          </Container>





        </section>

      );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Mesdocuments)
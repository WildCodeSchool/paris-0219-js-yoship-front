import React from 'react';
import { Col, Container, Card, CardImg, CardText, CardTitle, } from 'reactstrap';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';

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
      return (<div>loading</div>)
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
                    <button className='btn'>Upload</button>
                  </ReactFileReader>
                </Card>
              </Col>

              <Col xl="5" lg="5">
                <CardTitle icon="user-plus" ><h4> {data.name} {data.firstname} (User ID:2323)</h4></CardTitle>
                <CardText icon="user-plus" >Your phone :{data.phone}</CardText>
                <CardText icon="user-plus" >Email Addres :{data.mail}</CardText>
                <CardText icon="user-plus" >Status : </CardText>
         

              </Col>



            </div>
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">


              <Col xl="12" lg="12">
                <CardTitle className="cardtitleinformation" icon="user-plus" ><h4> Ma voiture</h4></CardTitle>
              </Col>


              <Col xl="4" lg="4">
                <CardText icon="user-plus" >Brand : {/* {data.brand} */}</CardText>
                <CardText icon="user-plus" >Color :{/* {data.color}{this.props.dateOfBirth} */} </CardText>
                <CardText icon="user-plus" >Description :{/* {data.description} */}</CardText>
                <CardText icon="user-plus">Fuel: {/*{data.fuel} */}  </CardText>

              </Col>



              <Col xl="4" lg="4">
                <CardText icon="user-plus" >Horse power :{/* {data.horsepower} */}</CardText>
                <CardText icon="user-plus" >kilometers : {/*{data.kilometers} */} </CardText>
                <CardText icon="user-plus" >LicencePlate : {/* {data.license_plate} */}</CardText>
                <CardText icon="user-plus" >modelYear : {/*{data.model_year} */}</CardText>


              </Col>
        
            </div>

            <Link to="/myCarUpdate" >
            <div className="MyCarsButton">   
         <Button text="Edite ton profil"/>
         </div>
         </Link>
          </Container>
        </section>

      );
    }
  }
}

export default MyCars;
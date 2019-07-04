import React from 'react';
import {Col, Container, Card, CardImg, CardText,
  CardTitle,} from 'reactstrap';
import ImageUpload from '../ImageUpload'
import "./Profil.scss"
import ReactFileReader from 'react-file-reader';

        class UploadFile extends React.Component {
             
            state = {

                lastname : '',
                globalLastName: '',
              
                firstname : '',
                globalFirstName: '',
              
                
              
                phone: '',
                globalphone:'',
              
              
                email : '',
                globalEmail: '',
              
                dateOfBirth : '',
                globalDateOfBirth: '',
              
                addres : '',
                globalAddres: '',
              
                postCode : '',
                globalPostCode: '',
                
                city : '',
                globalCity: '',
              
                country : '',
                globalCountry: '',
              
              
              }
            
             handleFiles = files => {
                console.log(files)
              }
      
      
          
           
          
            render() {
                return (
<div> <section id="project" className="project-section bg-light">
    <Container>  
    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
    
    <Col xl="2" lg="2">
    <Card>  
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"  alt="Card image cap" />
    
<ReactFileReader handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader>
    </Card>
    </Col>
    
    <Col xl="5" lg="5">
          <CardTitle icon="user-plus" ><h4> {this.state.globalLastName} {this.state.globalFirstName} (User ID:2323)</h4></CardTitle>
          <CardText icon="user-plus" >Your phone : {this.state.globalPhone}</CardText>
          <CardText icon="user-plus" >Email Addres : {this.state.globalEmail} </CardText>
          <CardText icon="user-plus" >Status :  </CardText>

        
      
      
      </Col>
     

 
    </div>
    <div className="row align-items-center no-gutters mb-4 mb-lg-5">

    
    <Col xl="12" lg="12">
          <CardTitle className="cardtitleinformation"icon="user-plus" ><h4> Mes information</h4></CardTitle>
          </Col>

          
          <Col xl="4" lg="4">   
          <CardText icon="user-plus" >Role :</CardText>
          <CardText icon="user-plus" >date of birth : {this.state.globalDateOfBirth} </CardText>
          <CardText icon="user-plus" >Password :</CardText>
          

        
          </Col>
      
      
     
          <Col xl="4" lg="4">   
          <CardText icon="user-plus" >Addres : {this.state.globalAddres}</CardText>
          <CardText icon="user-plus" >Postcode : {this.state.globalPostCode} </CardText>
          <CardText icon="user-plus" >City :  {this.state.globalCity}</CardText>
          <CardText icon="user-plus" >Country : {this.state.globalCountry}</CardText>

        
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
    
 </div>

                    )
              }
          
             
            }
         
          export default UploadFile; 
          
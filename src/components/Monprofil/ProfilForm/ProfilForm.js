// import React, { Component } from 'react';
// import './ProfilForm.scss';
// import { Field, formInputData, formValidation } from 'reactjs-input-validator';
// import { Input, Col, Container, Button, Progress } from 'reactstrap';




// class App extends Component {

  



//   }

//   changeHandler = (e) => {
//     this.setState ({ [e.target.name]:e.target.value  })
     
//   }

//   componentDidMount = () => {}

//   submitForm = (e) => {
//     e.preventDefault()
//     this.setState({
//       globalfirstName : `${this.state.firstName}`,
//       globallastName : `${this.state.lastname}`,
     
//     })
//   }

//   render() {


//     return (



//       <div className="Film"> 

//           <form onSubmit={this.submitForm}>

//           <p>  {this.state.globalfirstName}</p>
//           <p> {this.state.lastname} </p>
//           <p>  {this.state.globalphone} </p>
//           <p> {this.state.email} </p>



//           <fieldset>
      

//       <label htmlFor="name">Nom Prénom</label>

//       <input
//         type="text"
//         name="title"
//         onChange={this.changeHandler}
//         value={this.state.title}
//       />


// <label htmlFor="name">Nom Prénom</label>

// <input
// type="text"
// name="title"
// onChange={this.changeHandler}
// value={this.state.title}
// />


      
//       <label htmlFor="name">phone</label>
// <input
//         type="text"
        
//         name="phone"
//         onChange={this.changeHandler}
//         value={this.state.phone}
//       />



//     <hr />
//      <input type="submit" value="Seed" />
//    </fieldset>
// </form>



          
//     </div>
          
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import './ProfilForm.scss'; 




class FormProfil extends Component {

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
  changeHandler = (e) => {
    this.setState ({ [e.target.name]:e.target.value  })
     
  }
  
  componentDidMount = () => {}
  
  submitForm = (e) => {
    e.preventDefault()
    this.setState({
      
      globalLastName : `${this.state.lastName}`,
      globalFirstName :  `${this.state.firstName}`,
      globalPhone : `${this.state.phone}`,
      globalEmail : `${this.state.email}`,
      globalDateOfBirth : `${this.state.dateOfBirth }`,
      globalAddres : `${this.state.addres }`,
      globalPostCode : `${this.state.postCode }`,
      globalCity : `${this.state.city }`,
      globalCountry : `${this.state.country }`,
    })
  }
  
  handleFiles = files => {
    console.log(files)
  }
  render() {
    return (


    <section id="register" className="register">
     

    <form onSubmit={this.submitForm}>
    <p>  {this.state.globalLastName} </p>
    <p>  {this.state.globalFirstName} </p>
    <p>  {this.state.globalPhone} </p>      
    <p>  {this.state.globalEmail} </p>
    <p>  {this.state.globalDateOfBirth} </p>
    <p>  {this.state.globalAddres} </p>
    <p>  {this.state.globalPostCode} </p>
    <p>  {this.state.globalCity} </p>
    <p>  {this.state.globalCountry} </p>

      <fieldset>
     


<label htmlFor="name">Nom :</label>

<input
type="text"
name="lastName"
onChange={this.changeHandler}
value={this.state.lastName}
/>



<label htmlFor="name">Prénom :</label>

<input
type="text"
name="firstName"
onChange={this.changeHandler}
value={this.state.firstName}
/>


          
<label htmlFor="name">phone :</label>
<input
            type="text"
            
            name="phone"
            onChange={this.changeHandler}
            value={this.state.phone}
          />



<label htmlFor="name">Email Addres :</label>

<input
type="text"
name="email"
onChange={this.changeHandler}
value={this.state.email}
/>

<label htmlFor="name">Date of birth :</label>

<input
type="text"
name="dateOfBirth"
onChange={this.changeHandler}
value={this.state.dateOfBirth}
/>

<label htmlFor="name">Addres :</label>

<input
type="text"
name="addres"
onChange={this.changeHandler}
value={this.state.addres}
/>




          <label htmlFor="name">Postcode :</label>

          <input
            type="text"
            name="postCode"
            onChange={this.changeHandler}
            value={this.state.postCode}
          />

<label htmlFor="name">City :</label>

<input
type="text"
name="city"
onChange={this.changeHandler}
value={this.state.city}
/>

<label htmlFor="name">Country :</label>

<input
type="text"
name="country"
onChange={this.changeHandler}
value={this.state.country}
/>


        <hr />
         <input type="submit" value="Seed" />
       </fieldset>
    </form>
</section>
    


);
}
}



export default FormProfil;









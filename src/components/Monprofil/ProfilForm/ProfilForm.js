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
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import allTheActions from '../../../actions'

import './ProfilForm.scss';




class FormProfil extends Component {

  state = {

    lastName: '',
    globalLastName: '',

    firstName: '',
    globalFirstName: '',

    phone: '',
    globalphone: '',


    email: '',
    globalEmail: '',

    dateOfBirth: '',
    globalDateOfBirth: '',

    address: '',
    globalAddress: '',

    postCode: '',
    globalPostCode: '',

    city: '',
    globalCity: '',

    country: '',
    globalCountry: '',


  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  componentDidMount = () => { }

  // submitForm = (e) => {
  //   e.preventDefault()
  //   this.setState({

  //     globalLastName: `${this.state.lastName}`,
  //     globalFirstName: `${this.state.firstName}`,
  //     globalPhone: `${this.state.phone}`,
  //     globalEmail: `${this.state.email}`,
  //     globalDateOfBirth: `${this.state.dateOfBirth}`,
  //     globalAddress: `${this.state.address}`,
  //     globalPostCode: `${this.state.postCode}`,
  //     globalCity: `${this.state.city}`,
  //     globalCountry: `${this.state.country}`,
  //   })
  // }

  handleFiles = files => {
    console.log(files)
  }
  render() {
    console.log(this)
    return (


      <section id="register" className="register">

        <p>  {this.state.lastName} </p>
        <p>  {this.state.globalFirstName} </p>
        <p>  {this.state.globalPhone} </p>
        <p>  {this.state.globalEmail} </p>
        <p>  {this.state.globalDateOfBirth} </p>
        <p>  {this.state.globalAddress} </p>
        <p>  {this.state.globalPostCode} </p>
        <p>  {this.state.globalCity} </p>
        <p>  {this.state.globalCountry} </p>

        <form >

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

            <label htmlFor="name">Email Address :</label>

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

            <label htmlFor="name">Address :</label>

            <input
              type="text"
              name="address"
              onChange={this.changeHandler}
              value={this.state.address}
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
            
          </fieldset>
        </form>
        <button onClick={() => this.props.formAction.form(this.state)}>Register</button>
      </section>



    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      formAction: bindActionCreators(allTheActions.formActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormProfil)








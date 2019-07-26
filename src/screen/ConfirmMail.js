import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../components/RegisterForm/ConfirmedMail/ConfirmedMail.scss"

const config = require('../config/config')

class ConfirmMail extends Component {
  state = {
    isLoading: true,
    redirect: false
  }

  componentDidMount = async () => {
    const token = this.props.match.params.token

    await axios({
      method: 'PUT',
      url: `http://localhost:${config.port}/confirmation/${token}`,
      headers: {
        'x-access-token': `${token}`,
      },
    })
      .then(res => {
        this.setState({ isLoading: false })
        console.log(res.msg);
      })
      .catch(error => {
        this.setState({ redirect: true });
        console.log(error);
      })

    if (this.state.isLoading === false) {
      setTimeout(() => this.setState({ redirect: true }), 3000);
    }
  }

  render() {
    const { redirect, isLoading } = this.state

    if (redirect) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header pathname={this.props.location.pathname} />
        <div className='confirm'>
          {isLoading
            ? <p>Chargement...</p>

            : <div className="confirmed-container">
              <h2>Votre email a été confirmé !</h2>
              <h3>Vous serez automatiquement redirigé dans quelques secondes</h3>
            </div>
          }
        </div>
        <Footer />
      </>
    );
  }
}

export default ConfirmMail;
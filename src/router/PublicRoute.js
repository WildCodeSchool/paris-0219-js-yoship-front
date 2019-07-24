import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../screen/Home';
import axios from 'axios'


class PublicRoute extends Component {
  _isMounted = false

  state = {
    verified: false,
    isLoading: false
  }

  componentDidMount() {
    this._isMounted = true
    this.verifyToken();
  }

  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  verifyToken() {
    // Getting localStorage data
    const token = localStorage.getItem("token");
    const config = require("../config/config");
    // Only launch request if a token is saved in localstorage
    if (token) {
      this.setState({
        isLoading: true
      })
      axios({
        method: "Get",
        url: `http://localhost:${config.port}/verify`,
        headers: {
          "x-access-token": `${token}`
        }
      })
        .then(res => {
          console.log(res);
          this.setState({
            verified: true,
            isLoading: false
          })
        }).catch(error => {
          console.log(error);
          this.setState({
            verified: false,
            isLoading: false
          })
        });
    }

  }
  render() {
    const { verified, isLoading } = this.state;
    const { component: Component, ...rest } = this.props;
    if (!isLoading) {
      if (verified) {
        return <Redirect to="/dashboard" />
      }
      return <Route {...rest} render={props => (<Component {...props} />)} />;
    } else {
      return <p>Loading...</p>
    }
  }
}

export default withRouter(PublicRoute);
import React, { Component } from 'react';
import axios from 'axios'
import { Route, Redirect, withRouter } from "react-router-dom";
import Loader from '../components/UI/Loader/Loader'
class PrivateRoute extends Component {

    state = {
        verified: false,
        isLoading: true
    }

    componentDidMount() {
        this.verifyToken();
    }

    componentDidUpdate(prevProps) {
        if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
          window.scrollTo(0, 0)
        }
      }
    
    verifyToken() {
        // Getting localStorage data
        const token = localStorage.getItem("token");
        const config = require("../config/config");
        
        axios({
            method: "Get",
            url: `http://localhost:${config.port}/verify/${this.props.permission}`,
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

    render () {
        const { verified, isLoading } = this.state;
        const { component: Component, ...rest } = this.props;

        if(!isLoading) {
            return(
                <Route {...rest} render={props => (
                        verified ? (
                            <Component {...props}/> 
                        )       
                        : 
                        (
                            (console.log(props.location)),
                            <Redirect to={{
                                    pathname: '/login',
                                    state: props.location 
                                }}
                            />
                        )
                    )}
                />
            );
        } else {
            return <Loader />
        }
    }
}
export default withRouter(PrivateRoute);

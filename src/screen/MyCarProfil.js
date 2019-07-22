

import React, { Component } from "react";
import MyCars from '../components/MyCar/MyCars';
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";

class MyCarProfil extends Component {
    state = {};
    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname} />
                <MyCars />
                <Footer />
            </div>
        );
    }
}

export default MyCarProfil;
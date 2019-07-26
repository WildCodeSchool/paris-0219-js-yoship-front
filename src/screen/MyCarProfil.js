import React, { Component } from "react";
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";
import MyCars from '../components/MyCar/MyCars';

class MyCarProfil extends Component {
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


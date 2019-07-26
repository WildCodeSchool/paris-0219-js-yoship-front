import React, { Component } from "react";
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";
import ProfilUpdate from '../components/Monprofil/ProfilEdit/ProfilUpdate'

class MonProfilUpdate extends Component {
    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname} />
                <ProfilUpdate />
                <Footer />
            </div>
        )
    }
}
export default MonProfilUpdate;








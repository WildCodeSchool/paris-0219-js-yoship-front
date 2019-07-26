import React, { Component } from 'react';
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";
import TrackingSection from "../components/TrackingSection/TrackingSection";

class Tracking extends Component {
    render() {
        return (
            <div>
                <Header pathname={this.props.location.pathname} />
                <TrackingSection />
                <Footer />
            </div>
        );
    }
}

export default Tracking;

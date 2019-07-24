import React, { Component } from 'react';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";
import PageHeader from '../components/Header/PageHeader/PageHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import TrackingSection from "../components/TrackingSection/TrackingSection";

class Home extends Component {

    render() { 
        return ( 
            <div>
                <Header pathname={this.props.location.pathname} background={true}/>
                <PageHeader />
                <ProjectSection />
                <TrackingSection />
                <Contact />
                <Footer />
            </div>
         );
    }
}
 
export default Home
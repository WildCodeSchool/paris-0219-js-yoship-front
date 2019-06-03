import React from "react";
import PageHeader from '../components/Header/PageHeader/PageHeader';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Contact from '../components/Contact/Contact/Contact';
import Footer from '../components/Footer/Footer'
import TrackingSection from "../components/TrackingSection/TrackingSection";

const Home = () => {

    return (
        <div>
            <PageHeader />
            <ProjectSection />
            <TrackingSection />
            <Contact />
            <Footer />
        </div>
    )
}


export default Home
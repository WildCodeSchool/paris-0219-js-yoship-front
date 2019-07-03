
import React from 'react';
import { Container, Col, Button, } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import './status.scss'
class statusroles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (

            <section id="project" className="project-section bg-light">
                <Container>

                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">

                        <Col xl="12" lg="12">
                            <div className="titrestatus">
                                <h4>ed ut perspiciatis unde omnis</h4>
                            </div>
                        </Col>

                        <Col xl="6" lg="6">
                            <div className="yodriversclass text-center text-lg-left">

                                <div className="titreyodrivers">
                                    <h4>YoDrivers</h4>
                                </div>

                                <p className="text-black-50 mb-0">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem </p>
                                <p className="text-black-50 mb-0"><br />ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem </p>
                                <p className="text-black-50 mb-0"><br /> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem </p>
                            </div>

                            <div className="boutonyodriversbouton">

                                <NavLink to="/Register" >
                                    <Button
                                        className="not-member" >
                                        <p>
                                            YoDrivers<br />
                                        </p>
                                    </Button>
                                </NavLink>
                            </div>
                        </Col>

                        <Col xl="6" lg="6">
                            <div className="featured-text text-center text-lg-left">

                                <div className="titreyodrivers">
                                    <h4>YoEntreprise</h4>
                                </div>

                                <p className="text-black-50 mb-0">ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem </p>
                                <p className="text-black-50 mb-0"><br />ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem </p>
                                <p className="text-black-50 mb-0"><br /> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem </p>
                            </div>

                            <div className="boutonyodriversbouton">
                                <Button className="not-member" >

                                    <p>
                                        Entreprise <br />
                                    </p>

                                </Button>
                            </div>
                        </Col>
                    </div>
                </Container>
            </section>
        );
    }
}





export default statusroles;
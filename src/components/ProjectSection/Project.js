import React from 'react';

import { Card, Container, Col } from 'reactstrap';

import './Project.scss'

const projectSection = (props) => {
    return (
        <section id="project" className="project-section bg-light">
            <Container>
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <Col xl="8" lg="7">
                        <Card>
                            <iframe title="Car" className="video-fluid mb-3 mb-lg-0" src="https://www.youtube.com/embed/u9R8Mst7sk4?autoplay=0&showinfo=0&controls=1" allowFullScreen></iframe>
                        </Card>
                    </Col>
                    <Col xl="4" lg="5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>A tailor-made buying advice at home</h4>
                            <p className="text-black-50 mb-0">YoShip is an innovative concept of delivery,advice and sales at home, with the same buying experience coming from luxury brands.</p>
                            <p className="text-black-50 mb-0"><br /> Licensed drivers have their own workspaces, bundling all services needed to track their customers, manage their invoices and to deliver new orders.</p>
                            <p className="text-black-50 mb-0"><br /> Also registered luxury brands and companies, have access to their orders with sales statistics and reports, from approved drivers according to coming deliveries.</p>
                        </div>
                    </Col>

                </div>
            </Container>
        </section>
    );
};

export default projectSection;
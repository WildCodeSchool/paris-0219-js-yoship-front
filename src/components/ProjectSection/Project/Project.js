import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Media from '../Video/Media'
import '../Project/Project.scss'

const Project = (props) => {
    return (
        <section id="project" class="project bg-light">

            <Container>
                <Row mb="4" mb-lg="5">
                    <Col col-xl="8" col-lg="7">
                        <Media />
                    </Col>
                    <Col col-xl="4" col-lg="5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>A tailor-made buying advice at home</h4>

                            <p class="text-black-50 mb-0">YoShip is an innovative concept of delivery, advice and sales at home, with the same buying experience coming from luxury brands.</p>
                            <p class="text-black-50 mb-0">Licensed drivers have their own workspaces, bundling all services needed to track their customers, manage their invoices and to deliver new orders.</p>
                            <p class="text-black-50 mb-0">Also registered luxury brands and companies, have access to their orders with sales statistics and reports, from approved drivers according to coming deliveries.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Project;
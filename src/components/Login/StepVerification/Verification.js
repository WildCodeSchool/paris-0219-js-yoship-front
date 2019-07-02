import React from 'react';

import { FormGroup, Label, Input, Container, Col, Progress, Row, Card, Button } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import Formation from '../StepFormation/Formation'

import './Verification.scss'


class Paper extends React.Component {
  render() {
    return (
      <section id="paper" className="paper">
        <Container>

          <Card className="paper-titre" >
            <h4>Vérification a effectuer</h4>
            <p> Vérifié </p>
          </Card>

          <Row className="paper-titre">
            <Col xl="6" lg="6">

              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Adresse e-mail
          </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Numéro de téléphone
          </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Permis de conduire
          </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Photo avec piéce d'identité
          </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>  <Label check>
                    <Input type="checkbox" /> Justificatif de domicile
          </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Données bancaires -RIB
          </Label>
                  </p>
                </FormGroup>
              </div>
            </Col>
            <Col xl="6" lg="6">
              <div className="featured-text text-center text-lg-left">
                <p className="text-black-50 mb-0">Quand toutes vos piéces seront
    vérifiées, vous recevrez un courriel
                 pour terminer la procédure.</p>
                <p className="text-black-50 mb-0"><br /> Ce courriel vous dirigera vers une
      interface ou vous pourrez choisir
                  votre identifiant et mot de passe</p>
                <p className="text-black-50 mb-0"><br /> Cette identifiant et mot de passe
                   vous permettrez d'accéder a votre < br />
                  espace YOPARTNER via notre site < br />
                  ou notre application.</p>
              </div>
            </Col>
            <Col xl="12" lg="12">
              <div>
                <div className="barprogress">Etapes 2 sur 3</div>
                <Progress animated value="66.66" />
                <div className="barprogress">Verification en cours</div>

              </div>
            </Col>

            <NavLink to="/Formation" onClick={Formation} >


              <Button className="button-login-submit">SUBMIT FORM</Button>

            </NavLink>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Paper;


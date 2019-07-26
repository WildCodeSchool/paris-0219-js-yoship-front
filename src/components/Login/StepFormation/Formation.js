import React from 'react';
import { FormGroup, Label, Input, Container, Col, Progress, Row, Card, } from 'reactstrap';
import './Formation.scss'

class Paper extends React.Component {
  render() {
    return (
      <section id="paper" className="paper">
        <Container>
          <Card className="paper-titre" >
            <h4>Mon parcours de formation</h4>
            <p> Etapes : </p>
          </Card>
          <Row className="paper-titre">
            <Col xl="8" lg="8">
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Examen de conduite
                    </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Formation en vente
                    </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Formation au stylisme en partenariat avec nos clients
                    </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>
                    <Label check>
                      <Input type="checkbox" /> Formation en Anglais
                    </Label>
                  </p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check inline>
                  <p>  
                    <Label check>
                      <Input type="checkbox" /> Examen final
                    </Label>
                  </p>
                </FormGroup>
              </div>
            </Col>
            <Col xl="12" lg="12">
              <div>
                <div className="barprogress">Etape 3 sur 3</div>
                <Progress animated value="99.99" />
                <div className="barprogress">Remise de certificat</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default Paper;












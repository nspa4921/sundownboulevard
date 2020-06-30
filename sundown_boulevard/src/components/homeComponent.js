import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Slider from './Carousel';
import FindOrder from './findOrder';


    const Home = (props) => {
      return (
          <div>
            <Container>
            <Row>
              <Col sm="8">
                <Card body>
                  <Slider/>
                </Card>
              </Col>
              <Col sm="4">
                <Card body>
                  <CardTitle>ORDER FLOW BOX</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button outline color="danger">ORDER</Button>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle><h2>FIND YOUR ORDER</h2></CardTitle>
                    <p>ENTER E-MAIL</p>
                    <FindOrder />
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
                    <CardText><b>CONTENT BOX</b></CardText>
                    <br></br><br></br><br></br>
                    <Button outline color="danger">Go somewhere</Button>
                  </Card>
                </Col>
            </Row>  
            </Container>
          </div>
      );
    }
    
    export default Home;
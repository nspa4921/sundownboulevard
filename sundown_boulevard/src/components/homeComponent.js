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
                <Card body >
                  <CardTitle>ORDER FLOW BOX</CardTitle>
                  <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </CardText>
                  <Button outline color="danger">ORDER</Button>
                </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle><h2>FIND YOUR ORDER</h2></CardTitle>
                    <CardText>ENTER E-MAIL</CardText>
                    <FindOrder />
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
                    <br></br>
                    <CardText align="center"><b>CONTENT BOX</b></CardText>
                    <br></br>
                    <Button outline color="danger">Go somewhere</Button>
                  </Card>
                </Col>
            </Row>  
            </Container>
          </div>
      );
    }
    
    export default Home;
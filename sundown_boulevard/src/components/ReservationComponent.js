import React from 'react';
import { FormGroup, Label, Input,  Breadcrumb, BreadcrumbItem, Col, Row, Container, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
    
    const Reservation = (props) => {
        return (
          <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Order</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>ORDER HEADER</h3>
                  <hr />
              </div>                
          </div>
          <Container>
            <Row>
                <Col sm="5">
                  <CardTitle>PICK DATE AND TIME</CardTitle>
                  <hr/>
                    <FormGroup>
                      <Label for="reservDate">Date</Label>
                      <Input type="date" name="date" id="reservDate" placeholder="date placeholder" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="reservDate">Time</Label>
                      <Input type="time" name="time" id="reservTime" placeholder="time placeholder" />
                    </FormGroup> 
                </Col>
                <Col sm="6">   
                        <br></br><hr/>
                        <FormGroup>   
                        <Label for="reservSelect">Select amount of people</Label>
                          <Input type="select" name="select" id="reservSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                          </Input>
                        </FormGroup>
                        <FormGroup >
                            <Label for="reservEmail"><b>Enter your e-mail address</b></Label>
                            <Input type="email" name="email" id="reservEmail" placeholder="Email" />
                        </FormGroup>
                          <Button outline color="danger" className="float-right">ORDER</Button>    
                </Col>
            </Row>
            <hr/>
          </Container>
          </div>
        );
      }

export default Reservation;
import React from 'react';
import { Card, CardTitle, CardImg, CardBody, CardImgOverlay, Breadcrumb, BreadcrumbItem, Col, Button, Row, Container, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';


export default class FetchRandomDrinks extends React.Component {
    state = {
      loading: true,
      drink: null
    };
  
    async componentDidMount() {
      const url = "https://api.punkapi.com/v2/beers";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ drink: data[3], loading: false });
    }

    
    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.drink) {
          return <div>didn't get a dish</div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Drinks</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>PICK YOUR DRINK</h3>
                        <hr />
                    </div>                
                </div>
            <Container>
            <Row>
                <Col sm="8">
                    <Card body> 
                  <div key={this.state.drink.id} className="col-12 col-md-5 m-1">
                    <Card >
                    <CardBody>
                        <CardImg width="100%" src={this.state.drink.image_url} alt={this.state.drink.name} />
                            <CardTitle>{this.state.drink.name}</CardTitle>
                            <CardText>{this.state.drink.description}</CardText>
                    </CardBody>
                    </Card>
                  </div>
                  </Card>
                  </Col>
                  <Col sm="4">
                    <Card body>
                        <CardTitle>Lorem ipsum dolor sit amet. <br/><br/><br/><br/><h3>PICK DATE AND AMOUNT</h3></CardTitle>
                        <br></br>
                        <Button outline color="danger" onClick={() => window.location.pathname = '\Reservation'}>NEXT</Button>
                    </Card>
                </Col>
                  </Row>
                  </Container>
                  </div>
                );
    }
}
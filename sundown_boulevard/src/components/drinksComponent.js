import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem, Col, Row, Container, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDrinks ({drink, onClick}) {
    return (
        <Card>
            <Link to={`/drinks/${drink.id}`} >
                <CardImg width="100%" src={drink.image} alt={drink.name} />
                <CardImgOverlay>
                    <CardTitle>{drink.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

    const Drinks = (props) => {

        const drinks = props.drinks.map((drink) => {
            return (
                <div className="col-2 col-md-5 m-1"  key={drink.id}>
                    <RenderDrinks drink={drink} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Drinks</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Drinks</h3>
                    <hr />
                </div>                
            </div>

        <Container>
            <Row>
                <Col sm="8">
                    <Card body>
                    <div className="row">
                        {drinks}
                    </div>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>NEXT PCIK DATE AND AMOUNT</CardTitle>
                        <br></br>
                        <Button>NEXT</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        );
    }

export default Drinks;
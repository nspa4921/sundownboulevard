import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, Col, Button, Row, Container, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
            </Link>
        </Card>
    );
}

function RenderMenuItemDescription ({dish, onClick}) {
    return (
        <Card>     
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>       
        </Card>
    );
}

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-12 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                    <RenderMenuItemDescription dish={dish}  />
                    <br/>
                    <Button outline color="danger" className="float-right">Generate new</Button>
                </div>
            );
        });

        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Dishes</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>DISHES</h3>
                    <hr />
                </div>                
            </div>
            <Container>
            <Row>
                <Col sm="8">
                    <Card body>
                    <div className="row">
                        {menu}
                    </div>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>NEXT PICK DATE AND AMOUNT</CardTitle>
                        <br></br>
                        <Button outline color="danger" onClick={props.onClick} >NEXT</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
    }

export default Menu;
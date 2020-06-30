import React from 'react';
import { Card, CardTitle, Breadcrumb, BreadcrumbItem, Col, Button, Row, Container, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';



export default class FetchRandomUser extends React.Component {
    state = {
      loading: true,
      dishes: null
    };
  
    async componentDidMount() {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ dishes: data.meals[0], loading: false });
    }

    
  
    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.dishes) {
          return <div>didn't get a dish</div>;
        }
    
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
                     <img src={this.state.dishes.strMealThumb} />  
                        <CardTitle>{this.state.dishes.strCategory}</CardTitle>
                        <CardText>{this.state.dishes.strInstructions}</CardText>
                    <div>
                    <Button outline color="danger" className="float-right" onClick={() => window.location.reload(false)}>Generate new</Button>
                    </div>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body>
                        <CardTitle>Lorem ipsum dolor sit amet. <br/><br/><br/><br/><h3>PICK SOME DRINKS NEXT</h3></CardTitle>
                        <br></br>
                        <Button outline color="danger">NEXT</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        );
      }
    }
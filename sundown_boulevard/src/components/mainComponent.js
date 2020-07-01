import React, { Component } from 'react';
import Header from './headerComponent';
import Menu from './menuComponent';
import Reservation from './ReservationComponent';
import Drinks from './drinksComponent';
import Home from './homeComponent';
import { DISHES } from '../shared/dishes';
import { DRINKS } from '../shared/drinks';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Footer from './footerComponent';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      drinks: DRINKS,
    };
  }

  async componentDidMount() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ dishes: data.meals[0], loading: false });
  }

  render() {
    return (
      <div>
         <Header />
         <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/drinks' component={() => <Drinks drinks={this.state.drinks} />} />
              <Route exact path='/reservation' component={Reservation} />
              <Redirect to="/home" />
          </Switch>
          {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;
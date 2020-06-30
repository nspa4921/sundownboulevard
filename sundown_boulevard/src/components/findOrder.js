import React, { Component } from 'react';
import { Button, Form, Input, Row } from 'reactstrap';

class FindOrder extends Component{
    constructor( props, context ){
        super(props, context);
        this.state = {
          emailInput: ''
        }
    }

    handleChange = ( e ) => {
      this.setState( { emailInput: e.target.value } );
    }

    validateEmail = () => {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
      if (reg.test(this.state.emailInput) == false) 
      {
          alert('Invalid Email Address');
          return false;
      }
      window.location.pathname = '/menu';
      return true;  
    }

    render() {
      return (
        <Form>
          <Row>
            <Input type="email" name="email" id="findOrderEmail" placeholder="Example: sundownboulevard@dwarf.dk" onChange={this.handleChange} />
          </Row>
            <Button outline color="danger" className="float-right" onClick={this.validateEmail}>FIND</Button>
        </Form>
      );
    }

}

export default FindOrder;
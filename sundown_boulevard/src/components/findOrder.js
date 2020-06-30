import React from 'react';
import { Button, Form, Input, Row } from 'reactstrap';



function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}


const FindOrder = (props) => {
  return (
    <Form>
      <Row>
            <Input type="email" name="email" id="findOrderEmail" placeholder="Example: sundownboulevard@dwarf.dk" />
      </Row>
      <Button outline color="danger" className="float-right">FIND</Button>
    </Form>
  );
}

export default FindOrder;
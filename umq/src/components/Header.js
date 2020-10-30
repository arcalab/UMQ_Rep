import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BBackground from '../img/bg.png';

function Header1() {
  return (
  	<div style= {{ backgroundImage: `url(${BBackground})`}}>
    <Container>
    <Row>
    <Col sm={8}>
      <h1><br/> 
      Quantum Research at ARCA Lab 
      <br/><br/></h1>
    </Col>
    <Col sm={4}></Col>
    </Row>
    </Container>
    </div>
  );
}

export default Header1;
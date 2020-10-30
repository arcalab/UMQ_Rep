import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import UMDI from '../img/um-di.png';
import Arca from '../img/arca-logo4.svg';


function FooterInfo(){
  return (

  	<div>
       <Container>
	       <Row>
			<Col lg={11}>
			<Row>
		       <Col md={4}>
		       <br/>
		       <a href="https://www.di.uminho.pt" target="_blank" rel="noopener noreferrer">
		       	<Image src={UMDI} height={50} />
		       </a>
		       </Col>
		       <Col md={4}>
		       <br/>
		       <a href="//arca.di.uminho.pt/index.html" target="_blank" rel="noopener noreferrer">
		       	<Image src={Arca} height={50}/>
		       </a>
		       </Col>
		       <Col md={4}>
		       <br/>
		       <p>ana.neri AT quantalab.uminho.pt</p>
		       </Col>
	       </Row>
	       </Col>
	       </Row>
       </Container> 
    </div>
  );	
}

function Footer() {
  return (
  	<div>
       <Container>
	       <Row>
	       	<Col md={1}>
	       	</Col>
		    <Col md={11}>
		       <FooterInfo />
		    </Col>
	       </Row>
       </Container> 
    </div>
  );
}

export default Footer;
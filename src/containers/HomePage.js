import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import qiskitIMG from '../img/qiskit.png';
import quipperIMG from '../img/haskell.png';
import welcome from '../text/welcome.json';
import datacards from '../text/cards.json';

function Welcome() {
	return (
		<Jumbotron>
		<h1>{welcome.title}</h1>
		<br/>
		<p>{welcome.body}</p>
		</Jumbotron>
		
	);
}

function DemoCards() {

	return (
		<CardColumns>
			<Card border="secondary">
				<Card.Img variant="top" src={qiskitIMG} />
				<Card.Body>
					<Card.Title> {datacards.cards.qiskit.title} </Card.Title>
					<Card.Text> {datacards.cards.qiskit.body} </Card.Text>
					<a class="mybutton" href="https://github.com/arcalab/quantumsoftwareengineering/blob/master/src/docs/DemoQiskit.ipynb" target="_blank" rel="noopener noreferrer">Go</a>
				</Card.Body>
			</Card>
			
			<Card border="secondary">
				<Card.Img variant="top" src={quipperIMG} />
				<Card.Body>
					<Card.Title> {datacards.cards.quipper.title} </Card.Title>
					<Card.Text> {datacards.cards.quipper.body} </Card.Text>
					<a class="mybutton" href="https://github.com/arcalab/quantumsoftwareengineering/blob/master/src/docs/DemoQuipper.hs" target="_blank" rel="noopener noreferrer">Go</a>
				</Card.Body>
			</Card>
		</CardColumns> 
	);
}

function HomePageContent() {
	return (
		<div>
				<Container>
					<Row>
					<Col lg={10}>
						<Row>
						<Col md={11}>
							<Welcome />
							<DemoCards />
						</Col>
						</Row>
					</Col>
					</Row>
				</Container>
		</div>
	);
}

function HomePage() {
	return (
		<div>
		<br/>
		<br/>
		<Container>
		   <Row>
	       <Col md={2}>
	       </Col>
	       <Col md={10}>
	        <HomePageContent />
	       </Col>
	       </Row>
		</Container>

		</div>
	);
}

export default HomePage;
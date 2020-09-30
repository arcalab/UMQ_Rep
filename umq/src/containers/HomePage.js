import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import qiskit from '../img/qiskit.png';
import quipper from '../img/haskell.png';
import Button from 'react-bootstrap/Button';

function Welcome({title="Welcome", body="Hi!"}) {
	return (
		<Jumbotron>
		<h1>{title}</h1>
		<br/>
		<p>{body}</p>
		</Jumbotron>
		
	);
}

function DemoCards({datacards}) {
	
	const mycards = Object.values(datacards);	
	return (
		<CardColumns>
			
			<Card border="secondary">
				<Card.Img variant="top" src={qiskit} />
				<Card.Body>
					<Card.Title> {mycards[0].qiskit.title} </Card.Title>
					<Card.Text> {mycards[0].qiskit.body}	</Card.Text>
					<Button variant="secondary">Go</Button>
				</Card.Body>
			</Card>
			
			<Card border="secondary">
				<Card.Img variant="top" src={quipper} />
				<Card.Body>
					<Card.Title> {mycards[0].quipper.title} </Card.Title>
					<Card.Text> {mycards[0].quipper.body} </Card.Text>
					<Button variant="secondary">Go</Button>
				</Card.Body>
			</Card>
		</CardColumns>
	);
}

function HomePageContent({title="", body="", datacards}) {
	return (
		<div>
				<Container>
					<Row>
					<Col lg={10}>
						<Row>
						<Col md={11}>
							<Welcome title={title} body={body}/>
							<DemoCards datacards={datacards}/>
						</Col>
						</Row>
					</Col>
					</Row>
				</Container>
		</div>
	);
}

function HomePage({title="", body="", datacards}) {
	return (
		<div>
		<br/>
		<br/>
		<Container>
		   <Row>
	       <Col md={2}>
	       </Col>
	       <Col md={10}>
	        <HomePageContent title={title} body={body} datacards={datacards}/>
	       </Col>
	       </Row>
		</Container>

		</div>
	);
}

export default HomePage;
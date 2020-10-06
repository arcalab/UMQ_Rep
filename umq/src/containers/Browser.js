import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BrowserContent() {
	return (
		<div>
				<Container>
					<Row>
					<Col lg={10}>
						<Row>
						<Col md={11}>
							<p>Browser</p>
						</Col>
						</Row>
					</Col>
					</Row>
				</Container>
		</div>
	);
}

function Browser() {
	return (
		<div>
		<br/>
		<br/>
		<Container>
		   <Row>
	       <Col md={2}>
	       </Col>
	       <Col md={10}>
	        <BrowserContent />
	       </Col>
	       </Row>
		</Container>

		</div>
	);
}

export default Browser;
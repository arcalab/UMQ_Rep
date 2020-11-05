import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom';
import repinfo from '../text/repinfo.json';
import Table from 'react-bootstrap/Table';

const info = repinfo;

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function smallchanges(as) {
	if ((typeof as) === "object") {
		const myauthors = as.map((a) => a + "; ");
		return myauthors;
	} else {
		return as;
	}
	
}

function ItemContent() {

	let query = useQuery();

	const type = query.get("type");
	const id = query.get("id");

	if ("rep" === type ) {
		var list = Object.keys(info.repos).map(key => ({[key]: info.repos[key]}));
		var size = 3; 

	}
	else { 
		list = Object.keys(info.docs).map(key => ({[key]: info.docs[key]}));
		size = 5;
	}

	const myitem= list[id];
	const aux = Object.values(myitem);

	const mytitles = Object.keys(aux[0]);
	const myinfos = Object.values(aux[0]);

	var simpletitle = mytitles.slice(0,size);

	return (
		<div>
				<Container>
					<Row>
					<Col lg={10}>
						<Row>
						<Col md={11}>
							<Table>
							<tbody>
								{simpletitle.map((mtitle, idx) => 
									<tr key={mtitle}>
									  <th key={mtitle}>{mtitle}</th>
									  <td key={idx}>{smallchanges(myinfos[idx])}</td>
									</tr>
								)}
								<tr><th>{mytitles[size]}</th>
								<td><a href={"quantumsoftwareengineering/"+ myinfos[size]} target="_blank" rel="noopener noreferrer">{myinfos[size]}</a></td>
								</tr>
							</tbody>
							</Table>

						</Col>
						</Row>
					</Col>
					</Row>
				</Container>
		</div>
	);
}

function Item() {
	return (
		<div>
		<br/>
		<br/>
		<Container>
		   <Row>
	       <Col md={2}>
	       </Col>
	       <Col md={10}>
	        <ItemContent />
	       </Col>
	       </Row>
		</Container>

		</div>
	);
}

export default Item;
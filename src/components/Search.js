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

function takevalues(x){
	const y = Object.values(x);
	return y;
}

function printauthors(as) {
	const myauthors = as.map((a) => a + "; ")
	return myauthors;
}

function TabReps() {

	const list = Object.keys(info.repos).map(key => ({[key]: info.repos[key]}));

	const values = Object.values(list[0]);
	const keys = Object.keys(values[0]);
	var size = 2;
	var myhead = keys.slice(0,size);

	return(
		<div>
		<Table>
		  <thead>
		   <tr>
		   	{myhead.map((item) => <th key={item}> {item} </th> )}
		   </tr>
		  </thead>
		  <tbody>
			{list.map((info) => takevalues(info).map((i) => 
				<tr key={i.id}>
				<td><a href={"/item/?type=rep&id=" + i.id}>{console.log(typeof i.id)}{i.Title}</a></td>
				<td>{printauthors(i.Authors)}</td>
				</tr>))}
		  </tbody>
		</Table>
		</div>
		);
}

function TabDocs() {
	const list = Object.keys(info.docs).map(key => ({[key]: info.docs[key]}));

	const values = Object.values(list[0]);
	const keys = Object.keys(values[0]);
	var size = 4;
	var myhead = keys.slice(0,size);

	return(
		<div>
		<Table>
		  <thead>
		   <tr>
		   	{myhead.map((item) => <th key={item}> {item} </th> )}
		   </tr>
		  </thead>
		  <tbody>
			{list.map((info) => takevalues(info).map((i) => 
				<tr key={i.id}>
				<td><a href={"/item/?type=doc&id=" + i.id}>{i.Title}</a></td>
				<td>{printauthors(i.Authors)}</td>
				<td>{i.Date}</td>
				<td>{i.Type}</td>
				</tr>))}
		  </tbody>
		</Table>
		</div>
		);
}

function WhichTable(thetype="") {
	const stype = JSON.stringify(thetype.thetype);

	if (stype === "\"Documents\"") {
		return <TabDocs />;
	}
	else { 
		return <TabReps />;
	}
}

function SearchContent() {

	let query = useQuery();

	const type = query.get("type");

	return (
		<div>
				<Container>
					<Row>
					<Col lg={10}>
						<Row>
						<Col md={11}>
							<h1> {type} </h1>
							<WhichTable thetype={type} />
						</Col>
						</Row>
					</Col>
					</Row>
				</Container>
		</div>
	);
}

function Search() {
	return (
		<div>
		<br/>
		<br/>
		<Container>
		   <Row>
	       <Col md={2}>
	       </Col>
	       <Col md={10}>
	        <SearchContent />
	       </Col>
	       </Row>
		</Container>

		</div>
	);
}

export default Search;
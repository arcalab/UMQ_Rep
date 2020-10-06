import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';

// Toggle always showing becasue Navbar expand default is xxl
// collapseOnSelect expand="xxl" bg="light" variant="light" sticky="top"

function Nav1() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky="top">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Browse by:" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/browse?type=authors"> Authors </NavDropdown.Item>
            <NavDropdown.Item href="/browse?type=title">Title</NavDropdown.Item>
            <NavDropdown.Item href="/browse?type=type">Document type</NavDropdown.Item>
            <NavDropdown.Item href="/browse?type=date">Date</NavDropdown.Item>
            <NavDropdown.Item href="/browse?type=subject">Subject</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sr-2"/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Nav1;
import React, { Component } from 'react'
import { Container, Navbar, Col, Row, Nav, NavItem, NavDropdown, FormControl, Form, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar variant="light" className="custom-nav">
        {/* <Container fluid> */}
          <Row  className="nav-row">
            <Col>
              <Navbar.Brand>
                <Link to="/">TangSpace</Link>
              </Navbar.Brand>
            </Col>
            <Col >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                {/* <NavItem eventKey={1} componentClass={Link} to="/">
                  Home
                </NavItem> */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <NavDropdown title="Spaces" id="basic-nav-dropdown">
                  
                  <NavDropdown.Item href="/tech">Tech</NavDropdown.Item>
                  <NavDropdown.Item href="/scholar">Scholar</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/fitness">Fitness</NavDropdown.Item>
                  <NavDropdown.Item href="/food">Food</NavDropdown.Item>
                  <NavDropdown.Item href="/model">Model</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/connect">Connect</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Col>
          </Row>
        {/* </Container> */}
      </Navbar>
    )
  }
}

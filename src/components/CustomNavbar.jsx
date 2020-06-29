import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar  bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">TangSpace</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            {/* <NavItem eventKey={1} componentClass={Link} to="/">
              Home
            </NavItem> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Spaces" id="basic-nav-dropdown">
              <NavDropdown.Item href="/fitness">Fitness</NavDropdown.Item>
              <NavDropdown.Item href="/tech">Tech</NavDropdown.Item>
              <NavDropdown.Item href="/scholar">Scholar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/random">Random</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/connect">Connect</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

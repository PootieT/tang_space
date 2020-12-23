import React, { Component } from 'react'
import { Navbar, Col, Row, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar variant="light" expand="md" className="custom-nav">
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
                <Nav.Link ><Link to="/">Home</Link> </Nav.Link>
                <Nav.Link ><Link to="/about">About</Link> </Nav.Link>
                <NavDropdown title="Spaces">
                  <NavDropdown.Item >
                    <Link to="/research">Research</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/tech">Tech</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to="/fitness">Fitness</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                    <Link to="/food">Food</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/modeling">Modeling</Link> 
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link ><Link to="/connect">Connect</Link> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Col>
          </Row>
        {/* </Container> */}
      </Navbar>
    )
  }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Space</h1>
          <h5>/spās/</h5>
          <p>A continuous area or expanse which is free, available, or unoccupied.</p>
        </Jumbotron>
        <Row className="justify-content-md-center">
          <Link to="/about">
            <Button bsStyle="primary">Who is Tang</Button>
          </Link>
        </Row>
        <Row className="show-grid text-center">    
          <Col xs={12} sm={6} className="space-wrapper">
            <Link to="/fitness">  
              <Image src="assets/fitness-profile.jpg" circle fluid className="space-profile" />
              <h3>Fitness</h3>
            </Link>
          </Col>
          <Col xs={12} sm={6} className="space-wrapper">
            <Link to="/scholar">  
              <Image src="assets/scholar-profile.jpg" circle fluid className="space-profile" />
             <h3>Scholar</h3>
            </Link>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={6} className="space-wrapper">
            <Link to="/tech">  
              <Image src="assets/tech-profile.jpg" circle fluid className="space-profile" />
              <h3>Tech</h3>
            </Link>
          </Col>
          <Col xs={12} sm={6} className="space-wrapper">
            <Link to="/random">  
              <Image src="assets/random-profile.jpg" circle fluid className="space-profile" />
              <h3>Random</h3>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}
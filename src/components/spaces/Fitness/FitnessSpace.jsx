import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css'

export default class FitnessSapce extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/fitness-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center">
            <h3>Fitness</h3>
          </Row>
          <Row className="justify-content-md-center">
            <p>Fitness is a melady that strings through my life throughout various stages.</p>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css'

export default class RandomSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/random-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Random</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>I eat, cook, sail, dance, model, build stuff, performs standups, and think about what to build next</p>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css'

export default class TechSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/tech-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center">
            <h3>Tech</h3>
          </Row>
          <Row className="justify-content-md-center">
            <p>I build things, and sometimes they are cool and useful.</p>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Connect extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <h3>Connect me below:</h3>
          </Row>
          <Row className="justify-content-md-center">
            LinkedIn: https://www.linkedin.com/in/peter-tang-83802495/
          </Row>
          <Row className="justify-content-md-center">
            Twitter: https://twitter.com/Zilu_Tang_Peter
          </Row>
          <Row className="justify-content-md-center">
            GitHub: https://github.com/PootieT
          </Row>
          <Row className="justify-content-md-center">
            Instagram: https://www.instagram.com/tangpihai/
          </Row>
          <Row className="justify-content-md-center">
            Email: ziluDotpDotTangAtGmailDotcom
          </Row>


          
            
  
        </Jumbotron>
      </Container>
    )
  }
}
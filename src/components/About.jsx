import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/about-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center">
          <h3>About me</h3>
         </Row>
         <Row className="justify-content-md-center">
           <p>I am currently a research engineer at IBM Research Cambridge Lab. Graduated from Rice with a bacholar degree in Bioengineering, I went on to tackle systems that can be built and solved in a faster pace.</p>
         </Row>
        </Jumbotron>       
      </div>
      
    )
  }
}
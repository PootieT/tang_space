import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Publication from './Publication'
import '../Spaces.css'

export default class ScholarSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/scholar-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Scholar</h1>
          </Row>
          <Col md={ {span: 8, offset: 2 }}>
            <Row className="justify-content-md-center">
              <p>I read about AI, and contribute to Neural-symbolic AI research</p>
            </Row>
            <p>
              With a background in bioengineering, I used to be interested in the field 
              of synthetic biology, bioinformatics (microfluidic imaging), and brain machine
              interface research.
            </p>
            <p>
              With increasing practice and knowledge in computer science and machine learning,
              I became interested in the field of neural-symbolic AI systems. A field of AI 
              which believes the ultimate general artificial intelligence requires both neural 
              (connectionist) and symbolic sub-parts to achieve human level intelligence.
            </p>  
            <Row className="justify-content-md-center">
              <h4>Publications</h4>  
            </Row>
            <Publication 
                title="TraceHub-A Platform to Bridge the gap between State-of-the-Art Time-Series Analytics and Datasets" 
                authors={["S Agarwal", "C Muise", "M Agarwal", "S Upadhyay", "Z Tang", "Z Zeng"]}
                conference="AAAI 2020"
                awards="Best Demo Awards" />
            <Row className="justify-content-md-center">
              <h4>In Review</h4>
          </Row>
          <Publication 
                title="Discrete Word Embedding for Logical Natural Language Understanding." 
                authors={["Z Tang", "M Asai"]}
                conference="NeurIPS 2020"
                awards="" />
            <Row className="justify-content-md-center">
              <h4>Patents</h4>  
            </Row>
          </Col>
        </Jumbotron>     
      </div>
    )
  }
}
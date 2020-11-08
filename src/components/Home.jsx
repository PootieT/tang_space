import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Row className="show-grid text-center"> 
            <Col xs={6} sm={6}>
              <Image src="assets/scholar-profile.jpg" circle fluid className="space-profile" />
            </Col>   
            <Col xs={6} sm={6} style={{textAlign:"left"}}>
              <h1>Zilu Tang (Peter)</h1>
              <h5>/tzee-lu, tongue (Peter)/</h5>
              <p>Research Engineer, IBM</p>
              <p>Multi-agent Orchestration, NLP, Planning, Human Capability Augmentation</p>
            </Col>
          </Row>
          <Row className="show-grid text-center"> 
            <Col xs={12} sm={12} style={{textAlign:"left", paddingTop:"1em"}}>
              <p>What is <i>human capability augmentation</i>? I have always been fascinated with idealizing what 
              life can become with the help of technology. Not only can augmentation be in the form of physical devices, 
              such as brain-wave controlled exoskeletons, but also software technologies. I am interested in all 
              of the above. I not only want to make people's lives easier, but I also want to re-imagine what we
              can achieve and be with more technology enabled capabilities (such as having a virtual assistant 
              called Jarvis that knows everything and helps you fly around in an Iron man suite)</p>
              
              <p>I am interested in many things. You will find a lot of them in an individual <b>space</b>. If you 
              have similar interest in any of them, or want to build something cool based on them, I am all ears.</p>
              <p>More bio <Link to="/about"><b>here</b></Link>, and contact me <Link to="/contact"><b>here</b></Link></p>
            </Col>
          </Row>
        </Jumbotron>
        <hr/>
        <Jumbotron>
          <h1>News</h1>
          <ul>I won 2nd place and best posing award at Granite State Open natural bodybuilding show. (10/23/2020)</ul>
          <ul>I presented <i>"Discrete Word Embedding"</i> at KEPS Workshop (ICAPS 2020) (10/22/2020)</ul>
          <ul>Our group paper "TraceHub" won Best Demo at AAAI 2020 (2/12/2020)</ul>
        </Jumbotron>
        <hr/>
        <Jumbotron style={{paddingBottom:"0em"}}>
        <h1>Spaces</h1>
        </Jumbotron>
        <Row className="show-grid text-center">    
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/fitness">  
              <Image src="assets/fitness-icon.png" circle fluid className="space-profile" />
              <h3>Fitness</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/scholar">  
              <Image src="assets/scholar-icon.png" circle fluid className="space-profile" />
             <h3>Scholar</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/tech">  
              <Image src="assets/tech-icon.png" circle fluid className="space-profile" />
              <h3>Tech</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/food">  
              <Image src="assets/food-icon.png" circle fluid className="space-profile" />
              <h3>Food</h3>
            </Link>
          </Col>
          <Col xs={6} sm={3} className="space-wrapper">
            <Link to="/model">  
              <Image src="assets/model-icon.png" circle fluid className="space-profile" />
              <h3>Model</h3>
            </Link>
          </Col>
        </Row>
      </Container>
    )
  }
}
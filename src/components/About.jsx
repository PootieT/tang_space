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
         <Col md={ {span: 8, offset: 2 }}>
         <Row className="justify-content-md-center" style={{textAlign:"left"}} >

            <p>
             I was made in Wenzhou, China. A small town of 7 million people.

             I came to the US when I was 14. Redding, Calinia is not exactly where you 
             expect international students to end up, but I loved my host family.

             I moved to Evansville, Indiana for last two years of high school. I warmed
             benches for tennis and basketball teams.
            </p>
            <p>
             I went to Rice University for my B.S. in Bioengineering. With the dream 
             of "genetically engineer people so they smile more". I quickly realized 
             that I did not want to spend hours during and in between experiments. I 
             started taking CS classes and began to enjoy building engineering projects
             all on my finger point, with almost instantaneous feedback. In undergrad,
             I worked on a range of projects, from voice detection of caffein consumption,
             to DJ glove that mixes music in real time. I worked for academic resarch 
             labs, medical research centers, large corporations, and startups.
            </p>
            <p>
             I am currently a research engineer at IBM Research Cambridge Lab. During my 
             time here, I have worked on industry grade chatbot systems (Watson Assistant), 
             Machine learning deployment and monitoring platform for fairness, drift and
             explanation (Watson Openscale), and multi-agent orchestrating platforms. 
             I also collaborate with MIT-IBM lab on the side, building neural-symbolic
             systems in application to natural language processing. 
            </p>
            <p>
             I am applying to PhD in NLP right now! I am interested in building  
             <i> controllable</i>, <i>grammatical</i>, and <i>adaptable</i> natural language
             generation systems, with the ultimate goal of building the next generation 
             transferrable personal assistant. Instead of assistant, think of it as an 
             artificial child, to whom you can teach and train with your own knowledge.
            </p>
         </Row>
         </Col>
        </Jumbotron>       
      </div>
      
    )
  }
}
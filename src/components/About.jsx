import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/about-header.jpg" circle className="contained-image"/>
          </Row>
          
         <Col md={ {span: 8, offset: 2 }}>
         <Row className="justify-content-md-center">
          <h3>About me</h3>
         </Row>
          <Row className="justify-content-md-center" style={{textAlign:"left"}} >
              <p>
              I was made in Wenzhou, China. A small town of 7 million people.

              I came to the US when I was 14. Redding, California is not exactly where you 
              expect international students to end up, but I loved my host family.

              I moved to Evansville, Indiana for last two years of high school. I warmed
              benches for tennis and basketball teams.
              </p>
              <p>
              I went to Rice University for my B.S. in Bioengineering. With the dream 
              of "genetically engineer people so they smile more". I restarted iGEM 
              (international genetically engineered machine) at Rice with help of 
              Dr. Beth Beason. After my first CS class and bioinformatics research with
              Dr. Anirban Maitra (working with Dr. Anthony San Lucas), I realized my 
              nack for fast iterations and instantaneous feedback. In undergrad,
              I worked on a range of projects, from voice detection of caffein consumption,
              to DJ glove that mixes music in real time. I worked for academic resarch 
              labs, medical research centers, large corporations, and startups. You can find
              details of the projects in <Link to="/tech" className="obvious-link"><b>Tech Space</b></Link>.
              </p>
              <p>
              I am currently a research engineer at IBM Research Cambridge Lab. During my 
              time here, I have worked on industry grade chatbot systems (Watson Assistant), 
              Machine learning deployment and monitoring platform for fairness, drift and
              explanation (Watson Openscale), and many reserach products including a 
              multi-agent orchestrating platform, and a automated data pre-processing platform
              which won best demo paper at AAAI 2020. On my own time, I also collaborate with
              MIT-IBM lab on the side, building neural-symbolic systems in application to 
              natural language processing. 
              </p>
          </Row>
         </Col>
        </Jumbotron>       
      </div>
      
    )
  }
}
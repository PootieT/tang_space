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
            <p>
              I am interested in a variety of topics.
              With a background in bioengineering, I used to be interested in the field 
              of synthetic biology, bioinformatics (microfluidic imaging), and brain machine
              interface research.
            </p>
            <p>
              With increasing practice and knowledge in computer science and machine learning,
              I became interested in the field of neural-symbolic AI systems, with specific 
              application to natural language processing (NLP). Within NLP, I am interested 
              natural language generation, grounded natural language learning, semantic parsing,
              structurally enhanced language models, few-shot to zero-shot learning, reasoning, etc.
            </p>  
            <Row className="justify-content-md-center">
              <h4>Publications</h4>  
            </Row>
              <Publication 
                  title="TraceHub-A Platform to Bridge the gap between State-of-the-Art Time-Series Analytics and Datasets" 
                  authors={["S Agarwal", "C Muise", "M Agarwal", "S Upadhyay", "Z Tang", "Z Zeng"]}
                  conference="AAAI 2020"
                  awards="Best Demo Awards"
                  pdfLink="https://aiide.org/ojs/index.php/AAAI/article/download/7087/6941"
                   />
              <Publication 
                  title="Discrete Word Embedding for Logical Natural Language Understanding" 
                  authors={["Z Tang", "M Asai"]}
                  conference="KEPS Workshop, ICAPS 2020"
                  pdfLink="https://icaps20subpages.icaps-conference.org/wp-content/uploads/2020/10/KEPS-2020_paper_9.pdf"
                  videoLink="https://www.youtube.com/watch?v=BCLQcEBJ5Bs"
                  awards="" />
            <Row className="justify-content-md-center">
              <h4>In Review</h4>
            </Row>
              <Publication 
                  title="Discrete Word Embedding for Logical Natural Language Understanding" 
                  authors={["Z Tang", "M Asai"]}
                  conference="ICLR 2020"
                  awards="" />
            <Row className="justify-content-md-center">
            <h4>Presentations & Posters</h4>  
            </Row>
              <Publication 
                    title="Neural Immersion: an Artistic Interface to Electroencephalogram" 
                    authors={["Z Tang", "J Cruz-Garza","E Todd", "A Kopteva", "J Contreras-Vidal"]}
                    conference="Rice Undergraduate Research Symposium (Poster) 2017"
                    awards="" />
              <Publication 
                    title="Detection of Pancreatic Ductal Adenocarcinoma by Evaluating the Biophysical Properties of Extracellular Vesicles in Human Peripheral Blood
                    Using Particle-Tracking Analysis" 
                    authors={["Z Tang", "F A San Lucas", "G Davis", "D Kim", "J Castillo", "P Gascoyne", "D Li", "H Alvarez", "A Maitra"]}
                    conference="Biomedical Engineering Society Annual Meeting (Poster) 2016"
                    awards="" />
              <Publication 
                    title="Photoacoustic Imaging of Gut Bacteria to Bypass Colonoscopy" 
                    authors={["R Bhardwaj", "K Burks", "J Chen", "K Chen", "J L Garcia", "J Lee", "Q Li", "M Lie", 
                    "J D Matthews", "E McCormick" , "P Suzuki", "C Tang", "S Vetsa", "Z Tang", "J Silberg", "B Beason"]}
                    conference="iGEM, Poster & Platform Presentation 2016"
                    awards="Silver Medalist (top 39%)"
                    webLink="http://2016.igem.org/Team:Rice" />
              <Publication 
                    title="Particle Analysis of Patient-Derived Exosomes for Pancreatic Cancer Detection" 
                    authors={["Z Tang", "G Davis", "J Castillo",  "D Kim", "F A San Lucas",  "T Kumar", "H Alvarez", "A Maitra"]}
                    conference="Rice Undergraduate Research Symposium (Poster) 2016"
                    awards="" />
              <Publication 
                    title="Potassium, Phosphate, and Nitrate Soil Biosensors" 
                    authors={[ "Z Tang", "et. al."]}
                    conference="iGEM, Poster & Platform Presentation 2015"
                    awards="Gold Medalist (top 29%), Nomiated for Best Environment Project (8/397) and Best New Basic Part (10/397)" 
                    webLink="http://2015.igem.org/Team:HKUST-Rice"/>
            {/* <Row className="justify-content-md-center">
              <h4>Patents</h4>  
            </Row> */}
          </Col>
        </Jumbotron>     
      </div>
    )
  }
}
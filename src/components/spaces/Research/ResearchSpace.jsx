import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image } from 'react-bootstrap';
import Publication from './Publication'
import '../Spaces.css'

export default class ResearchSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/reserach-header.jpg" circle className="contained-image"/>
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Research</h1>
          </Row>
          <Col md={ {span: 8, offset: 2 }}>
            <p>
              I am interested in a variety of topics.
              With a background in bioengineering, I used to be interested in the field 
              of synthetic biology, bioinformatics (microfluidic imaging), and brain machine
              interface research.
            </p>
            <p>
              With accumulation of practice and knowledge in computer science and machine learning,
              I became interested in the field of neural-symbolic AI systems, with specific 
              application to natural language processing (NLP). Within NLP I am interested in 
              <b>learning structural information from language</b> and 
              <b> augmenting language technologies with structural informaiton.</b> 
            </p>  
            <p>
              <b>Inducing structural information</b> is important because it allows us to access the inforation
                programmatically, along with established fields of research to derive insights. 
                from semantic parsing (the process of parsing natural language sentence into 
                logical form, often representable through trees) to meta-structures such as 
                dialog planning, I am interested in using statistical methods (neural nets, 
                probablistic models) to learn such structure from language. I believe structure
                holds the key to generalization in language technologies. Afterall, humans are just
                manipulating bunch of grammatical rules to generate what we say. 
              </p>
              <p>
                <b>Augmenting language technologies with (structural) knowledge</b> becomes 
                critical when language technologies lack the access to such data during training or 
                simply isn't equiped to deal with non-textual information. How will a language model know
                that an orange is circular shaped and may sting if you squeeze the juice into the eye?
                How will a language model know about a specific company product when such information 
                is confidential? How do you justify the 
                <a href="https://en.wikipedia.org/wiki/Trolley_problem" className="obvious-link"> Trolley problem </a> 
                to a language model so it makes the morally correct decision with complex reasoning? 
                I am interested in imbuing language technologies using existing knowledge base to 
                enhance such decision making.
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
                  conference="NAACL 2021"
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
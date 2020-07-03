import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Project from './Project'
import '../Spaces.css'

export default class TechSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/tech-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Tech</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>I build things, and sometimes they are cool and useful.</p>
          </Row>
          <Row className="justify-content-md-center">
            <Project
              name="DJ MoveMixx"
              image="assets/project-dj-move-mixx.jpg"
              description="A microcontroller-enabled glove that is hooked up to Mixx
                MIDI input to DJ music in real time"
              link="/djmovemixx">
              <a href="https://www.youtube.com/watch?v=BR7X9gsRT9E">Video Demo</a>
              {"\n"}
              <a href="https://www.youtube.com/watch?v=pR4h8jHmgWU">Demo Blooper</a>    
            </Project>
            <Project
              name="Swollen"
              image="assets/project-swollen.png"
              description="A Android app to collect workout data for downstream analysis"
              link="/swollen">
              <a href="https://play.google.com/store/apps/details?id=com.fitnessmobile">Google Playstore</a>
              {"\n"}
              <a href="https://github.com/PootieT/fitness_progression_modeling/tree/master/fitnessMobile">Git Repo</a>    
            </Project>
            <Project
              name="DiaBeatDis"
              image="assets/project-diabeatdis.png"
              description="A continuous glucose monitoring solution for low resource setting"
              link="/diabeatdis">
              <a href="https://www.youtube.com/watch?v=7kubvq1IroY">Project Video</a>
              {"\n"}
              <a href="https://github.com/PootieT/DiaBeatDis_android">Git Repo</a>    
            </Project>
          </Row>
          <Row className="justify-content-md-center">
            <Project
              name="MinDirect"
              image="assets/project-mindirect.png"
              description="A 3D printed Brain-Machine-Interface device that controls movement of a ball through EEG signal"
              link="/mindirect"> 
            </Project>
            <Project
              name="HadCaffeine?"
              image="assets/project-caffeine.jpg"
              description="A collaboration study with NeuroLex Labs to classify caffeine consumption through voice"
              link="/caffeine">
              <a href="https://www.neurolex.ai/">NeruoLex</a>
            </Project>
            <Project
              name="Liquid Biopsy"
              image="assets/project-liquid-biopsy.png"
              description="A prototype solution to diagnose pancreatic cancer through microfluidic videos analytics"
              link="/liquidbiopsy">
            </Project>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
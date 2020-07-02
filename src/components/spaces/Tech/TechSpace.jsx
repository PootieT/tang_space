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
          <Row className="justify-content-md-center">
            <h3>Tech</h3>
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
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
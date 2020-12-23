import React, { Component } from 'react'
import { Jumbotron, Row, Image } from 'react-bootstrap';
import '../Spaces.css'

export default class ModelingSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/modeling-header.jpg" circle className="contained-image"/>
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Modeling</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>I like getting pictures taken of me. For various different purposes: beauty pagent shows, calendar making, fitness modeling, etc. 
              If you are interested in scheduling a photoshoot with me, feel free to reach out!
            </p>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
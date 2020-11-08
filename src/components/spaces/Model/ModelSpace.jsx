import React, { Component } from 'react'
import { Jumbotron, Row, Image } from 'react-bootstrap';
import '../Spaces.css'

export default class ModelSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/model-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Model</h1>
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
import React, { Component } from 'react'
import { Jumbotron, Row, Image } from 'react-bootstrap';

export default class DjMoveMixx extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/tech-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center">
            <h3>DJ Move Mixx</h3>
          </Row>
          <Row className="justify-content-md-center">
            <p>Some descriptiton of DJ Move Mixx, a microcontroller based MIDI real time mixxing device</p>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
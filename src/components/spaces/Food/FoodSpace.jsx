import React, { Component } from 'react'
import { Jumbotron, Row, Image } from 'react-bootstrap';
import '../Spaces.css'

export default class FoodSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/food-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Food</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>I eat, cook, and think about what to eat next. More food pictures and recipes on the way! 
              The one in the cover is a Chinese cured pork belly I made.</p>
          </Row>
        </Jumbotron>       
      </div>
    )
  }
}
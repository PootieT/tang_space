import React, { Component } from 'react'
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css'

export default class Project extends Component {
  render() {
    return (
      <div>
        <Col xs={12} sm={4}>
          <Row className="justify-content-md-center">
            <Image src={this.props.image} circle />
            <p>{this.props.description}</p>
            <p>{this.props.children}</p>
          </Row>
        </Col>     
      </div>
    )
  }
}
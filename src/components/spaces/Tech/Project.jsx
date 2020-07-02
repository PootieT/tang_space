import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css'
import './Project.css'

export default class Project extends Component {
  render() {
    return (
      <Col sm={4} className="project">
        <Row className="justify-content-md-center">
          <h5>{this.props.name}</h5>
          <Image src={this.props.image} circle />
          {"\n"}
          <p>{this.props.description}</p>
          {"\n"}
          <p>{this.props.children}</p>
          <Link to={this.props.link} className="project-link">
            <p>→ Learn more</p>
          </Link>
        </Row>
      </Col>     
    )
  }
}
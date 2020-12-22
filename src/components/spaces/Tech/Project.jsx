import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import './Project.css'
import '../Spaces.css'

export default class Project extends Component {
  render() {
    return (
      <Col sm={3} className="project">
        <Row className="justify-content-md-center" style={{"margin-bottom":"0px"}}>
          <h3>{this.props.name}</h3>
        </Row>
        <Row className="justify-content-md-center">
          <Image src={this.props.image} circle style={{"margin-bottom": "10%", "object-fit": "contain"}} className="contained-image"/>
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
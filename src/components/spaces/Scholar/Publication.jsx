import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css'

export default class Publication extends Component {
  render() {
    return (
      <p>
        <i>{this.props.title}. </i>
        {this.props.authors.join(", ")}.  
        <i> {this.props.conference}. </i>  
        <b>{this.props.awards}</b>
      </p>
    )
  }
}
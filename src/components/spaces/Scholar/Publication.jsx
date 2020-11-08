import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../Spaces.css';
import '../../../index.css';

export default class Publication extends Component {
  render() {
    let pdfLink;
    if (this.props.pdfLink) {
      pdfLink = [<a href={this.props.pdfLink} style={{color: "var(--global-color-three)"}}> [pdf]</a>]
    } else {
      pdfLink = ""
    }

    let videoLink;
    if (this.props.videoLink) {
      videoLink = <a href={this.props.videoLink} style={{color: "var(--global-color-four)"}}> [video]</a>
    } else {
      videoLink = ""
    }

    let webLink;
    if (this.props.webLink) {
      webLink = <a href={this.props.webLink} style={{color: "var(--global-color-four)"}}> [web]</a>
    } else {
      webLink = ""
    }

    return (
      <p>
        <i>{this.props.title}. </i>
        {this.props.authors.join(", ")}.  
        <i> {this.props.conference}. </i>  
        <b>{this.props.awards}</b>
        {pdfLink}{videoLink}{webLink}
      </p>
    )
  }
}
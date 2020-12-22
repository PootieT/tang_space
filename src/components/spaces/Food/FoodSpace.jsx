import React, { Component } from 'react'
import { Jumbotron, Row, Image } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import '../Spaces.css'

const PHOTO_SET = [
  {
    src: 'assets/food/crispy-skin-pork-slice.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/crispy-skin-pork.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'assets/food/hong-shao-rou.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/bugulgi-bowl.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/japanese-bbq-chicken-bowl.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/lunch-sandwich.jpg',
    width: 8,
    height: 15
  },
  {
    src: 'assets/food/macha-snowskin-mooncake.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/mahi-mahi-garlic-noodle.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/oxtail-stew.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/pork-popcorn.jpg',
    width: 15,
    height: 8
  },
  {
    src: 'assets/food/salmon-steak.jpg',
    width: 15,
    height: 8
  },
];

export default class FoodSpace extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/food-header.jpg" circle className="contained-image"/>
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Food</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p>I eat, cook, and think about what to eat next. More food pictures and recipes on the way! 
              The one in the cover is a Chinese cured pork belly I made.</p>
          </Row>
          <Gallery photos={PHOTO_SET} />
        </Jumbotron>   
            
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import Editor from "@monaco-editor/react";
import '../Spaces.css'

export default class FitnessSapce extends Component {

  render() {
    const retrieve_fitness_stats =()=> {
      const data = {
        weight: 167,
        body_fat: 12.0,
        hrs_of_sleep: 7.1,
        resting_heart_rate: 58,
        max_heart_rate: 145,
        calories_expenditure: 2800,
        calories_consumption: 2760,
        diet: {
          brioche: {
            quantity: 1.0,
            unit: "slice"
          },
          protein: 198,
          carb: 355,
          fat: 101
        },
        workout: {
          pseudo_planche_pushup: [
            (10, 226, 60),
            (10, 226, 60),
            (10, 226, 60)
          ]
        },
        diary_emotion: {
          anger: 0.1,
          sadness: 0.4,
          happiness: 0.3
        }
      }
      return JSON.stringify(data, null, '\t')
    }

    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/fitness-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center">
            <h3>Fitness</h3>
          </Row>
          <Col md={ {span: 8, offset: 2 }}>
            <Row className="justify-content-md-center">
              <p>Fitness is not an end-goal but a journey</p>
            </Row>
            <p>
              I have been conscious about how I present in front of others since middle school.
              In China, where I grew up, it was a norm to comment on people's body.
            </p>
            <p>"Oh Zilu look at that little beer belly you have"</p>
            <p>
              Started with pushups and crunches everyday. I developed a decipline to never go
              to bed without exercising. I may not be the most athletic person in a group, but 
              I am sure above average and may look a lot bigger than how strong I actually am.
            </p>
            <p>
              From high school basketball and tennis team, to college cheerleading team, doing 
              something athletic has always been one of the routine I seek, doesn't matter where
              I end up. It's only through the regularity I can find energy and strength to deal
              with rest of the life shenanogans.
            </p>
            <p>
              I am currently training for a body building show in November-ish timeframe. The 
              original plan of competing in June was unfortunately canceled, but workout out 
              from home and figure out ways to continue my fitness journey without being seen 
              at the gym has tought me another level of discipline that I hope to bring with me
              into this next few months of training and cutting.
            </p>
          </Col>
          <Row className="justify-content-md-center">
            <h3>Programs and Diet</h3>
          </Row>
          <Col md={{span: 8, offset: 2 }}>
            <p>
              Having a good program is crucial to the success of your training. Ensuring a well
              balanced training schedule as well as the variety of exercises will bring an edge
              to your routine and prevents you from boredom. Currently I workout 6 days a week,
              two leg days, one chest day, one back day, one shoulder and one arm day. Abs every
              other day and cardio 0-2 times a week. I perform 15-24 sets of toal number of sets
              per muscle group and mostly keep the range of reps within 8-12, with the goal of 
              maximizing muscle size. Of course, depending on your specific goals you should 
              vary up your sets and reps. 
            </p>
            <p>
              Dieting is important not only for athletic performance but crucial to body composition
              aka. asthetics, aka. everything bodybuilding cares about. I control my macro intake
              within +- 5 grams everyday, with 350 g of carb, 100 g of fat, and 200 g of protein.
              If you are interested in finding what you should be eating and regulating your diet 
              to change how you look, I can help and point you to more references
            </p>
            <p>
              I keep track of my workout and diet everyday with the hope that I can analyze them later 
              and perform some optimization analytically. In sections below you will see some 
              basic visualizations of the data I have been collecting. If you are interested in
              the data, feel free to reach out and let's collaborate.
            </p>
          </Col>
          <Row className="justify-content-md-center">
            <h3>Daily Fitness Status</h3>
          </Row>
          <Col md={{span: 8, offset: 2 }}>
              <Editor
                height="60vh"
                language="json"
                value={retrieve_fitness_stats()}
              />
          </Col>

        </Jumbotron>       
      </div>
    )
  }
}
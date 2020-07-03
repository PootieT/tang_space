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
            [10, 226, 60],
            [10, 226, 60],
            [10, 226, 60]
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

    const retrieve_workout_stats =()=> {
      const data = {
        date: "6/24/2020",
        workout: {
            "pistol_squat":
                [
                  [[10, 167, 90], [14, 227, 90], [15, 227, 90], [10, 227, 90]]
                ],
            "heel_elevated_dumbbell_goblet_squat":
                [
                  [[20, 60, 90], [12, 115, 90], [11, 105, 90],[9, 105, 10], [13, 60, 90]]
                ],
            "bulgarian_split_squat":
                [
                  [[20, 227, 90], [15, 277, 90], [15, 277, 90]]
                ],
            "sisterhood_squat--single_standing_calf_raise":
                [      
                  [[12, 227, 10], [11, 227, 10], [10, 227, 10]],
                  [[20, 227, 30], [20, 227, 30], [20, 227, 30]]
                ],
            "band_hamstring_curl--plank":
                [
                  [[12, 80, 10], [15, 80, 10], [13, 90, 10]],
                  [[60, 0, 10], [60, 0, 10], [60, 0, 10]]
                ]
        },
        soreness_day_after: 3
      }
      return JSON.stringify(data, null, '\t')
    }

    return (
      <div>
        <Jumbotron>
          <Row className="justify-content-md-center">
            <Image src="assets/fitness-header.jpg" circle />
          </Row>
          <Row className="justify-content-md-center space-title">
            <h1>Fitness</h1>
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
          <Row className="justify-content-md-center">
            <h3>Fitbit Status</h3>
          </Row>
          <Col md={{span: 8, offset: 2 }}>
            <p>
              I track my heart rate and "steps" everyday. Though Fitbit data is far from idea, it does
              give you a few cool features such as heart rate, calorie consumed, estimated workout time,
              workout intensity, etc. Using this I can monitor the general health condition and if 
              necessary, correlates to my workout progress.
            </p>
          </Col>
          <Row className="justify-content-md-center">
            <h3>Diet Status</h3>
          </Row>
          <Col md={{span: 8, offset: 2 }}>
            <p>
              I track every piece of my diet in <a href="https://www.myfitnesspal.com/">MyFitnessPal</a> from 
              170g of greek yogurt in the morning, to 1oz of cachew at night. With the data I 
              draw correlation between diet and workout progress over time.
            </p>
          </Col>
          <Row className="justify-content-md-center">
            <h3>Workout Status</h3>
          </Row>
          <Col md={{span: 8, offset: 2 }}>
            <p>
              I track my workout everyday mannually. I attempted in making a workout tracking app to 
              faciliate the recording process during workout (see <a href="https://github.com/PootieT/fitness_progression_modeling/tree/master/fitnessMobile">Swollen</a> for detail), 
              but I soon realized that I just don't want to spend time thinking about anything in 
              between sets. Unless there is no manual inputs required, I am never going to record 
              workouts during exercise. What I have below is an example of such workout data point:
            </p>
            <Editor
              height="60vh"
              language="json"
              value={retrieve_workout_stats()}
            />
            <p>
              Most of the above dat ashould make sense. <i>soreness_day_after</i> is a rating 1-5 I give
              the day after the workout with 1 being not feeling any soreness and 5 being not being able
              to move without feeling a constant pain in that region of muscles. Each exercise name are
              joined by underscore. Two exercises are listed together joined by "--" when it is performed
              as a superset (performing two exercising in alternating sets). Each list of tuples within an
              exercise represent the sets of reps I have performed, with each tuple representing 
              [<i>reps</i>, <i>resistance (lbs)</i>, <i>rest time (seconds)</i>]
            </p>
          </Col>
          <Row className="justify-content-md-center">
            <h3>Want My Data?</h3>
          </Row>
          <Col md={{span: 8, offset: 2 }}>
            <p>
              Unless you are collecting your own fitness data manually, most of the fitness app out there
              doesn't allow you to export data in a nice format. One of the main reason I have been tracking 
              by myself is so I can one day publish this longitutal data for opensource purpose. If you would
              like to obtain early access to the data (currently not served over REST API which is in the working), 
              connect with me and we can collaborate. Cheers.
            </p>
          </Col>
        </Jumbotron>       
      </div>
    )
  }
}
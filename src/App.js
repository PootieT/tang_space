import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/CustomNavbar';
import Connect from './components/Connect';
import FitnessSpace from './components/spaces/Fitness/FitnessSpace'
import TechSpace from './components/spaces/Tech/TechSpace'
import DjMoveMixx from './components/spaces/Tech/projects/DjMoveMixx'
import ResearchSpace from './components/spaces/Research/ResearchSpace'
import FoodSpace from './components/spaces/Food/FoodSpace'
import ModelSpace from './components/spaces/Model/ModelSpace'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fitness" component={FitnessSpace} />
          <Route path="/tech" component={TechSpace} />
          <Route path="/djmovemixx" component={DjMoveMixx} />
          <Route path="/research" component={ResearchSpace} />
          <Route path="/food" component={FoodSpace} />
          <Route path="/model" component={ModelSpace} />
          <Route path="/connect" component={Connect} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/CustomNavbar';
import Connect from './components/Connect';
import FitnessSpace from './components/spaces/Fitness/FitnessSpace'
import TechSpace from './components/spaces/Tech/TechSpace'
import ScholarSpace from './components/spaces/Scholar/ScholarSpace'
import RandomSpace from './components/spaces/Random/RandomSpace'


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
          <Route path="/scholar" component={ScholarSpace} />
          <Route path="/random" component={RandomSpace} />
          <Route path="/connect" component={Connect} />
        </div>
      </Router>
    );
  }
}

export default App;

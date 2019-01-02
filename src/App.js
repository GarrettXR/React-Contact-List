import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact-info'

//
class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/Contact-info/:id' component = {Contact}/>
        </div>
      </Router>
      
    );
  }
}

export default App;

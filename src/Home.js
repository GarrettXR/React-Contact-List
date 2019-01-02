import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    
    render() {
      return (
          <div id="container1">
              <div id="title"><h1>My Peeps</h1></div>
              <ul>
              { data.map(peeps =>( 
              <Link to={`/Contact-info/${peeps.id}`}><li id="peep"><img src={peeps.picture.thumbnail}/> {peeps.name.first} {peeps.name.last}</li></Link>
                ))}
              </ul>    
          </div>        
      );
    }
  }
  
  export default Home
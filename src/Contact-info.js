import React, { Component } from 'react';
import './App.css';
import data from './data.json';

class Contact extends Component {
    render() {
      return (
        
       
       <div id="container2">
        <button></button>
        { data.map(person => (
            <div><img src={person.picture.large}/></div>
            ))}
                 <ul>
                 { data.map(person => ( 
                    <li id="names">{person.name.first} {person.name.last}</li>
                    // <li></li>
                    // <li></li>
                    // <li></li>
                ))}
                </ul>
        </div>
      );
    }
  }
  
  export default Contact;
  
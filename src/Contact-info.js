import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import 'font-awesome/css/font-awesome.css'
import {Link} from 'react-router-dom';


class Contact extends Component {
    state = {
        first: '',
        last: '',
        phone: '',
        city: '',
        state: '',
        email: '',
        img: ''
    }
    componentDidMount(){
        const info = data.find(i => {
            return i.id == this.props.match.params.id
        })
        this.setState({
            first: info.name.first,
            last: info.name.last,
            phone: info.phone,
            city: info.location.city,
            state: info.location.state,
            email: info.email,
            img: info.picture.large
        })
    }
    
    render() {
      return (
       <div id="container2">
            <div id="photo1"><span><Link to="/"><i class="fa fa-arrow-left"></i></Link></span><img src={this.state.img} id="photo"/></div>
                 <ul id="lists">
                    <li id="names"><i class="fa fa-user"></i> {this.state.first} {this.state.last}</li>
                    <li id="email"><i class="fa fa-envelope"></i> {this.state.email}</li>
                    <li id="phone"><i class="fa fa-phone"></i> {this.state.phone}</li>
                    <li id="location"><i class="fa fa-globe"></i> {this.state.city}, {this.state.state}</li>
                </ul>
        </div>
      );
    }
  }
  
  export default Contact;
  
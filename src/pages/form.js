import React, { Component } from 'react';
import NavBar from '../containers/navbar.js';
import ProgressBar from '../containers/progress.js';
import Choices from '../containers/choices.js';
import Revenue from '../containers/Revenue.js';
import '../stylesheets/growth.css';



class Form extends Component {



    render() {
        return ( <
            div >
            <
            NavBar / >
            <
            div className = "formboxA" >
            <
            Revenue / >
            <
            Choices / >
            <
            Revenue / >
            <
            Choices / >
            <
            /div>

            <
            ProgressBar / >
            <
            /div>
        );
    }
}




export default Form;
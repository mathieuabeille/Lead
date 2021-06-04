import React, { Component } from 'react';
import '../stylesheets/form.css';
import logo from '../assets/illustrations/family.svg';
import right from '../assets/illustrations/right.png';
import * as Scroll from 'react-scroll';
import {
    Link,
    DirectLink,
    Element,
    Events,
    scroll,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";
import NumberFormat from 'react-number-format';



class Revenue extends Component {
    constructor(props) {
        super(props);
        this.state = { amount: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        scroll.scrollToBottom();
    }
    myChangeHandler = (event) => {
        this.setState({ amount: event.target.value });
    }


    render() {
        return ( <
            div className = "formbox element"
            id = "revenue" >
            <
            form onSubmit = { this.mySubmitHandler } >
            <
            h2 > Etape 1 < /h2> <
            h1 > Quels sont vos revenus nets par mois avant impôts ? < /h1> <
            p > Pour identifier les meilleurs dispositifs < /p > <
            br / >
            <
            div className = "input" >
            <
            NumberFormat thousandSeparator = { true }
            onChange = { this.myChangeHandler }
            className = "input-box"
            maxLength = "7"

            /
            >
            <
            div className = "euro" > € < /div> < /
            div > <
            br / > <
            br / > {
                this.state.amount < 1500 ? null :
                    <
                    Link activeClass = "active"
                to = "family"
                className = "btn-flat"
                spy = { true }
                smooth = { true }
                duration = { 500 } > Continue < /Link >
            } <
            /
            form > <
            div className = "illustrations" >
            <
            img src = { logo }
            className = 'illustration'
            alt = 'Situation Familiale' /
            >
            <
            /div>  < /
            div >
        );
    }

}

export default Revenue;
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

class Choices extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.situations = [{
            title: "Célibataire",
        }, {
            title: "Marié(e)",
        }, {
            title: "Divorcé(e)",
        }, {
            title: "En concubinage",
        }, {
            title: "Veuf(ve)",
        }];
    }

    handleChange(event) { this.setState({ value: event.target.value }); }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }



    render() {

        return ( <
            div className = "formbox element"
            id = "family" >
            <
            div className = "question" >
            <
            h2 > Etape 2 < /h2> <
            h1 > Quelle est votre situation ? < /h1> <
            p > Ceci nous aide à calculer votre montant impôt < /p>  <
            br / >
            <
            Link activeClass = "active"
            to = "revenue"
            spy = { true }
            smooth = { true }
            duration = { 500 } > Back <
            /Link>  <
            div className = "choices" > {
                this.situations.map((situation, index) => ( <
                    Link key = { index }
                    className = "choice"
                    activeClass = "active"
                    to = "revenue"
                    spy = { true }
                    smooth = { true }
                    duration = { 500 } >
                    <
                    div > { situation.title } < /div> <
                    img src = { right }
                    alt = "right arrow"
                    className = "arrow" /
                    >
                    <
                    /Link>
                ))
            } <
            /div> < /
            div > <
            div className = "illustrations" >
            <
            img src = { logo }
            className = 'illustration'
            alt = 'Situation Familiale' /
            >
            <
            /div> < /
            div >

        );
    }

}

export default Choices;
import React, { Component } from 'react';
import '../stylesheets/form.css';
import logo from '../assets/illustrations/family.svg';
import right from '../assets/illustrations/right.png';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
    scrollToTop() {
        scroll.scrollMore(700, {
            delay: 100,
            smooth: true,
            ignoreCancelEvents: true,

        });
    }


    render() {
        return ( <
            div className = "formbox"
            id = "next" >
            <
            div className = "question" >
            <
            h2 > Etape 2 < /h2> <
            h1 > Quelle est votre situation ? < /h1> <
            p > Ceci nous aide à calculer votre montant d 'impôt</p> <
            br / >
            <
            div className = "choices" > {
                this.situations.map((situation, index) => ( <
                    div key = { index }
                    className = "choice"
                    onClick = { this.scrollToTop } >
                    <
                    div > { situation.title } < /div> <
                    img src = { right }
                    alt = "right arrow"
                    className = "arrow" /
                    >
                    <
                    /div>
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
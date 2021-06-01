import React, { Component } from 'react';
import '../stylesheets/form.css';
import logo from '../assets/illustrations/family.svg';
import right from '../assets/illustrations/right.png';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import NumberFormat from 'react-number-format';



class Revenue extends Component {
    constructor(props) {
        super(props);
        this.state = { amount: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        scroll.scrollMore(700, {
            delay: 100,
            smooth: true,
            ignoreCancelEvents: true,
        });
    }
    myChangeHandler = (event) => {
        this.setState({ amount: event.target.value });
    }
    scrollUp() {
        scroll.scrollMore(-700, {
            delay: 100,
            smooth: true,
            ignoreCancelEvents: true,
        });
    }

    render() {
        return ( <
            div className = "formbox" >
            <
            form onSubmit = { this.mySubmitHandler } >
            <
            h2 > Etape 1 < /h2> <
            h1 > Quels sont vos revenus nets par mois avant impôts ? < /h1> <
            p > Pour identifier les meilleurs dispositifs <
            div className = "choice"
            onClick = { this.scrollUp } > BACK < /div>< /p >
            <
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
            br / >
            <
            button type = 'submit'
            className = "btn-flat"
            label = 'Continuer'
            disabled = { this.state.amount < 1500 }

            >
            Continuer <
            img src = { right }
            alt = "right arrow"
            className = "arrow-button" /
            >
            <
            /button>   < /
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
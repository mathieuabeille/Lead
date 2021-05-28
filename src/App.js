import './stylesheets/App.css';
import Home from './pages/home.js';
import Growth from './pages/growth.js';
import Form from './pages/form.js';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Switch >
        <
        Route path = "/home"
        component = { Form }
        /> <
        Route path = "/growth"
        component = { Growth }
        /> <
        Route path = "/form"
        component = { Form }
        /> <
        Redirect from = "/"
        to = "/home" / >
        <
        /Switch> < /
        BrowserRouter > <
        /div>
    );
}

export default App;
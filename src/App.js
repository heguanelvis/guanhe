import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
        </Router>
    );
}

export default App;

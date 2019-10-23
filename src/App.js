import React from "react";
import "./App.scss";
import Nav from "./Nav/Nav";
import About from "./About/About";

function App() {
    return (
        <div className="App">
            <div class="nav-container">
                <Nav />
            </div>
            <div class="content-container">
                <About />
            </div>
        </div>
    );
}

export default App;

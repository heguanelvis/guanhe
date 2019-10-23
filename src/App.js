import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <div className="App-nav-container">
                <Nav />
            </div>
            <div className="content-container">
                <About />
            </div>
        </div>
    );
}

export default App;

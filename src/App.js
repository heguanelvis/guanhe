import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <div className="nav-container">
                <Nav />
            </div>
            <div className="content-container">
                <div>
                    <About />
                </div>
            </div>
        </div>
    );
}

export default App;

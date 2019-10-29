import React from "react";
import TextLoop from "react-text-loop";
import "./Home.scss";

export default function Home() {
    return (
        <div className="home">
            <h1>Hello World! </h1>
            <h1>My name is Guan He. </h1>
            <h1 className="home-inline">I am </h1>
            <TextLoop interval={1000}>
                <h1 className="home-inline">a Software Engineer</h1>
                <h1 className="home-inline">an Avid Foodie</h1>
                <h1 className="home-inline">a Cat Lover</h1>
                <h1 className="home-inline">a Web Developer</h1>
                <h1 className="home-inline">a Data Analyst</h1>
                <h1 className="home-inline">an Amateur Singer</h1>
                <h1 className="home-inline">a Big Dreamer</h1>
            </TextLoop>
            <h1>living in Detroit.</h1>
        </div>
    );
}

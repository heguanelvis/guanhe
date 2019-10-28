import React from "react";
import "./About.scss";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";

export default function About() {
    return (
        <div className="about-container">
            <h1 id="about" className="about-me__title">
                INTRODUCTION
            </h1>

            <p>
                Welcome to my website! My name is Guan He. I am a
                twenty-four-year old curious individual who loves coding and
                solving challenges.
            </p>
            <p>
                I grew up in China, and had my BA in International Studies,
                focusing on comparative politics and governance practices. In
                2017, I attended the University of Chicago, where I learned data
                analytics and visualization, specifically in the context of
                making policies. At the same time, I took multiple civic
                technology courses and developed an enthusiasm for programming.
                In the summer of 2019, I graduated with a Master of Public
                Policy and decided that I want to further my skills and pursue a
                career in technology. Currently, I am a full-time Java student
                at Tech Elevator learning about Test Driven Development and the
                Spring Framework.
            </p>
            <p>
                {" "}
                I have contributed to several small data-driven web projects
                featuring my personal interests and civic technology during the
                past two years. I specifically enjoy using the MERN Stack to
                build websites and using D3.js to create interactive and mobile
                responsive visualizations. I love collaborating with my team
                members and I am always willing to learn more and take on new
                challenges.{" "}
            </p>
            <p>
                In my spare time, I like cooking, singing, swimming, playing
                video games, taking care of my plants and spending time with my
                cat. I enjoy talking with all kinds of people and look forward
                to making more friends in the Detroit area.
            </p>

            <div className="about-img-wrapper">
                <div>
                    <img src={img1} alt="cat1" />
                </div>
                <div>
                    <img src={img2} alt="me1" />
                </div>
                <div>
                    <img src={img3} alt="me2" />
                </div>
                <div>
                    <img src={img4} alt="me3" />
                </div>
            </div>
        </div>
    );
}

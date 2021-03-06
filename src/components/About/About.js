import React from "react";
import "animate.css/animate.min.css";
import "./About.scss";
import Photos from "../Photos";

export default function About() {
    return (
        <div id="about" className="container-fluid">
            {" "}
            <div className="about-small-welcome">
                <h1>
                    你好(nǐ hǎo){" "}
                    <span role="img" aria-label="hello">
                        😎
                    </span>
                </h1>
                <br />
                <p>
                    “你好” means "Hello" in Chinese. Welcome to my website! My
                    name is Guan He. I am a twenty-four-year old curious
                    individual who loves coding, solving challenges and working
                    in teams. If you would like to learn more about me, feel
                    free to look around!
                </p>
            </div>
            <br />
            <div className="about-my-background container d-flex-wrap d-md-flex align-items-center justify-content-between">
                <div className="col-12 col-md-3">
                    <h1>
                        <span role="img" aria-label="background">
                            📚
                        </span>{" "}
                        My Background
                    </h1>
                </div>
                <div className="col-12 col-md-8">
                    <p>
                        I grew up in China, and received my{" "}
                        <strong>BA in International Studies</strong>, focusing
                        on comparative politics and governance practices. In
                        2017, I attended the{" "}
                        <strong>University of Chicago</strong>, where I learned
                        data analytics and visualization, specifically in the
                        context of making policies. At the same time, I took
                        multiple civic technology courses and developed an
                        enthusiasm for programming.{" "}
                    </p>
                    <br />
                    <p>
                        In the summer of 2019, I graduated with a{" "}
                        <strong>Master of Public Policy</strong> and decided
                        that I want to further my skills and pursue a career in
                        technology. Over the past 14 weeks, I have learned about{" "}
                        Test Driven Development and the Spring Framework at{" "}
                        <strong>Tech Elevator Bootcamp</strong>. I will start my
                        new coding career in February 2020.
                    </p>
                </div>
            </div>
            <br />
            <div className="about-tech-experience container d-flex align-items-center justify-content-between">
                <p className="col-12 col-md-7">
                    {" "}
                    I have contributed to several small{" "}
                    <strong>data-driven web projects </strong>
                    featuring my personal interests and civic technology during
                    the past two years. I specifically enjoy using the{" "}
                    <strong>MERN Stack and the Spring Framework</strong> to
                    build websites and using <strong>D3.js</strong> to create
                    interactive and mobile responsive visualizations. Recently,
                    I have been focusing on getting certified in using Cloud
                    Systems such as{" "}
                    <strong>
                        Amazon Web Services, Azure and Google Cloud Platform
                    </strong>
                    . I love collaborating with my team members and I am always
                    willing to learn more and take on new challenges.{" "}
                </p>
                <h1 className="col-12 col-md-4">
                    <span role="img" aria-label="techexperience">
                        🤖
                    </span>{" "}
                    Technical Experience
                </h1>
            </div>
            <br />
            <div className="about-my-interest container d-flex-wrap d-md-flex align-items-center justify-content-between">
                <h1 className="col-12 col-md-3">
                    <span role="img" aria-label="interest">
                        👨‍🍳
                    </span>{" "}
                    My Interests
                </h1>
                <p className="col-12 col-md-8">
                    In my spare time, I really enjoy trying out various cuisines
                    and cooking all kinds of food. I also like going to karaoke
                    bars, swimming, travelling to scenic spots, playing video
                    games, taking care of my plants and spending time with my
                    cat. In addition, I love attending hackathons and tech
                    conferences to meet interesting people and I am looking
                    forward to making more friends in the Detroit area.
                </p>
            </div>
            <Photos />
            <br />
        </div>
    );
}

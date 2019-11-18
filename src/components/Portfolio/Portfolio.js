import React from "react";
import "./Portfolio.scss";
import projects from "./portfolio_img.json";
import Project from "../Project";

export default function Portfolio() {
    return (
        <div id="portfolio" className="container-fluid">
            <div className="row d-flex flex-wrap align-items-center">
                {projects.map(project => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}

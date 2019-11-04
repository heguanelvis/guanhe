import React, { Component } from "react";
import "./Project.scss";

export default class Project extends Component {
    state = {
        hovered: false
    };

    render() {
        return (
            <div
                id={`project-${this.props.project.id}`}
                className="project-img-wrapper col-12 col-md-4 col-lg-3 mb-5 container-fluid"
                onMouseEnter={() => this.setState({ hovered: true })}
                onClick={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
            >
                {this.state.hovered && (
                    <div className="project-intro-cover col-12"></div>
                )}
                <img
                    className="project-img"
                    id={`project-img-${this.props.project.id}`}
                    src={this.props.project.src}
                    alt={this.props.project.title}
                    style={{ width: "100%", height: "240px" }}
                />
            </div>
        );
    }
}

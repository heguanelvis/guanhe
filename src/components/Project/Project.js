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
                className="project-img-wrapper col-12 col-sm-6 col-md-4 col-lg-3 mb-5 container-fluid"
                onMouseEnter={() => this.setState({ hovered: true })}
                onClick={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
            >
                {this.state.hovered && (
                    <div className="project-intro-cover col-12">
                        <h6 className="text-center">
                            {this.props.project.title}
                        </h6>
                        <p>{this.props.project.description}</p>
                        <div className="text-center">
                            {this.props.project.live ? (
                                <a
                                    href={this.props.project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-warning"
                                >
                                    Live
                                </a>
                            ) : (
                                <a
                                    href={this.props.project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-warning disabled"
                                >
                                    Live
                                </a>
                            )}
                            <span>{"   "}</span>
                            {this.props.project.code ? (
                                <a
                                    href={this.props.project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-warning"
                                >
                                    Code
                                </a>
                            ) : (
                                <a
                                    href={this.props.project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-warning disabled"
                                >
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                )}
                <img
                    className="project-img"
                    id={`project-img-${this.props.project.id}`}
                    src={this.props.project.src}
                    alt={this.props.project.title}
                />
            </div>
        );
    }
}

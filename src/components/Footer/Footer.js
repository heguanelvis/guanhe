import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p className="text-center">Thank you for connecting</p>
            <h1 className="text-center">
                <a
                    href="https://www.linkedin.com/in/guan-he/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>{" "}
                <a
                    href="https://github.com/heguanelvis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github-square"></i>
                </a>{" "}
                <a href="mailto:heguanelvis@gmail.com">
                    <i
                        className="fas fa-envelope-square"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></i>
                </a>
            </h1>
        </footer>
    );
}

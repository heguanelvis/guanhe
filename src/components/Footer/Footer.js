import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p className="text-center">Thank you for connecting</p>
            <h1 className="text-center">
                <Link to="https://www.linkedin.com/in/guan-he/">
                    <i className="fab fa-linkedin"></i>
                </Link>{" "}
                <Link to="https://github.com/heguanelvis">
                    <i className="fab fa-github-square"></i>
                </Link>{" "}
                <Link to="heguanelvis@gmail.com">
                    <i className="fas fa-envelope-square"></i>
                </Link>
            </h1>
        </footer>
    );
}

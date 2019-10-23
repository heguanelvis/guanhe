import React, { useState } from "react";
import "./Nav.scss";

export default function Nav() {
    return (
        <nav className="nav-container">
            <ul>
                <li>
                    {" "}
                    <a className="nav-brand__link" href="#about">
                        <img className="nav-brand__img" src="./favicon.ico" />
                    </a>
                </li>
                <li>
                    <a href="#about">Guan He</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

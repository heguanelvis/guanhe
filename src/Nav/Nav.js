import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
    return (
        <nav className="nav-container">
            <ul>
                <li>
                    {" "}
                    <NavLink className="nav-brand__link" to="#">
                        <img className="nav-brand__img" src="./favicon.ico" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="#">Guan He</NavLink>
                </li>
                <li>
                    <NavLink to="#">About</NavLink>
                </li>
                <li>
                    <NavLink to="#">Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="#">Resume</NavLink>
                </li>
                <li>
                    <NavLink to="#">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

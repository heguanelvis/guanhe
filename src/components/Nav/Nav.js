import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="fas fa-ghost"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
            </ul>
        </div>
    );
}

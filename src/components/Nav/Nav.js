import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import "bootstrap-css-only";

export default function Nav() {
    return (
        <nav className="container-fluid">
            <ul className="container-fluid d-flex align-items-center">
                <div className="col-3 col-md-2 col-lg-2 text-center text-left-md">
                    <li>
                        <NavLink className="nav-brand" to="/">
                            <i className="fas fa-ghost"></i>
                        </NavLink>
                    </li>
                </div>
                <div className="col-8 col-md-4 col-lg-3 text-center d-flex nav-links-block">
                    <li className="col-6 text-center nav-link-wrapper">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li className="col-6 text-center nav-link-wrapper">
                        <NavLink className="nav-link" to="/portfolio">
                            Portfolio
                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

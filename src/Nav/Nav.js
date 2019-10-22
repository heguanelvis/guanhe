import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
    return (
        <div className="nav-container">
            <nav>
                <div className="nav-brand">
                    <NavLink to="#">
                        <img className="nav-brand__img" src="./favicon.ico" />
                    </NavLink>
                    <h1>Guan He</h1>
                </div>
                <ul>
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
        </div>
    );
}

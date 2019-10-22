import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <div className="container">
            <nav>
                <h1 className="brand">Brand</h1>
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

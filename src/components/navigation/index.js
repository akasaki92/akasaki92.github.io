import React from "react";
import "./navigation.scss";

const Nav = props => {
    return (
        <nav>
            <ul id="navbar">
                <li>
                    <a href="#aboutme">About</a>
                </li>
                <li>
                    <a href="#projects">Work</a>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;

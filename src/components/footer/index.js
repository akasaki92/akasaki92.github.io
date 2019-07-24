import React from "react";
import "./footer.scss";

const Footer = props => {
    return (
        <footer>
            <p>
                <label>FIND ME ELSEWHERE : </label>
            </p>
            <span>
                <a href="https://linkedin.com/in/adam-santiaji/">LinkedIn</a>
                &nbsp;
            </span>
            <span>
                <a href="hsttps://github.com/akasaki92/">Github</a>
                &nbsp;
            </span>
            <span>
                <a href="mailto:adam.wikrama@gmail.com">Email me</a>
                &nbsp;
            </span>
        </footer>
    );
};
export default Footer;

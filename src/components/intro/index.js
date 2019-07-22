import React from "react";
import "./intro.scss";

const Intro = (props) => {
    return (
        <div id="welcome" className="intro">
            <h1>Hello World</h1>
            <samp>console.log("Hello World");</samp>
            <h2>
                <p>Hi, my name is </p>
                Raden Adam Santiaji. 
                <p>I am a Junior Frontend developer based in</p>
                <b>Bogor</b>. recently, i worked at &nbsp; 
                <a
                // eslint-disable-next-line
                    target="_blank"
                    href="https://kreatorku.com"
                    alt="Kreatorku.com"
                >
                     Kreatorku.com
                </a>{" "}
                located in Tangerang.
            </h2>
        </div>
    );
};
export default Intro;

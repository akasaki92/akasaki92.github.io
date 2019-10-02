import React from "react";
import "./aboutme.scss";
import profilImg from "../../assets/profile-img.jpg";

const AboutMe = props => {
    return (
        <div id="aboutme" className="aboutme">
            <img src={profilImg} alt="avatar" className="profile-image" />
            <h1>Raden Adam Santiaji</h1>
            <p>Junior Frontend developer</p>
            <div className="english">
                <p>
                    I am was former as a volunteer front-end
                    developer at Kreatorku.com,
                </p>
                <p>
                    there I have done remote work, helping in research and web
                    development.
                </p>
            </div>
            <div className="whatToDo">
                <h1>What I can do:</h1>
                <p>I'm code from design mockup to apps.</p>
                <h4>Language I use</h4>
                <p>HTML, CSS/SCSS, PHP, Javascript, Java, SQL</p>
                <h4>Dev tools</h4>
                <ul>
                    <li>Angular 1 years experience</li>
                    <li>Laravel 2 years experience</li>
                    <li>Lumen 1 years experience</li>
                    <li>Visual Studio Code</li>
                    <li>Github</li>
                    <li>Terminal</li>
                    <li>Ubuntu WSL</li>
                    <li>Trello</li>
                    <li>Laragon</li>
                    <li>Lampp</li>
                </ul>
            </div>
        </div>
    );
};
export default AboutMe;

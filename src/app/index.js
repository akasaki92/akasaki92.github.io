import React from "react";

import Nav from "../components/navigation";
import Intro from "../components/intro";
import Aboutme from "../components/aboutme";
import Footer from "../components/footer";
// import Works from "../contaners/works";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Nav />
            <Intro />
            <Aboutme />
            {/* Work container
            <Works header="Here my some of my training result" /> */}
            <Footer />
        </div>
    );
}

export default App;

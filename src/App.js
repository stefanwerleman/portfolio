import React from "react";
import Navigation from "./components/navigation/Navigation";
import Front from "./components/front/Front";
import AboutMe from "./components/about/AboutMe";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import ContactMe from "./components/contact/ContactMe";
import Skills from "./components/skills/Skills";

class App extends React.Component {
    render() {
        return (
            <div>
                <Front />
                <Navigation />
                <AboutMe />
                <Skills />
                <Projects />
                <Experience />
                <ContactMe />
            </div>
        );
    }
}

export default App;

import React from "react";
import Navigation from "./components/navigation/Navigation";
import Front from "./components/front/Front";
import AboutMe from "./components/about/AboutMe";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import ContactMe from "./components/contact/ContactMe";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";

class App extends React.Component {
    render() {
        return (
            <div>
                <Front id="front" />
                <Navigation id="navigation" />
                <AboutMe id="about" />
                <Skills id="skills" />
                <Projects id="projects" />
                <Education id="education" />
                <Experience id="experience" />
                <ContactMe id="contact" />
            </div>
        );
    }
}

export default App;

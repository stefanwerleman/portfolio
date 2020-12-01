import React from "react";
import Navigation from "./components/navigation/Navigation";
import Front from "./components/front/Front";
import AboutMe from "./components/about/AboutMe";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import ContactMe from "./components/contact/ContactMe";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import { GoMarkGithub } from "react-icons/go";
import { DiRuby, DiDjango } from "react-icons/di";
import {
    SiCodio,
    SiJava,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiNodeDotJs,
    SiReact,
    SiLinux,
    SiJest,
    SiMongodb,
    SiGooglecloud,
    SiMocha,
    SiBootstrap,
    SiCplusplus,
    SiMicrosoftword,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    SiWindows,
    SiNpm,
    SiJupyter,
} from "react-icons/si";

class App extends React.Component {
    render() {
        const tools = {
            java: <SiJava className="tool" style={{ color: "#ec2025" }} />,
            javascript: (
                <SiJavascript
                    className="tool"
                    style={{ color: "#f7e018", backgroundColor: "black" }}
                />
            ),
            python: <SiPython className="tool" style={{ color: "#008397" }} />,
            jupyter: (
                <SiJupyter className="tool" style={{ color: "#f37821" }} />
            ),
            html: <SiHtml5 className="tool" style={{ color: "#e44d26" }} />,
            css: <SiCss3 className="tool" style={{ color: "#379ad6" }} />,
            react: <SiReact className="tool" style={{ color: "#7ddfff" }} />,
            reactnative: (
                <SiReact className="tool" style={{ color: "#7ddfff" }} />
            ),
            node: <SiNodeDotJs className="tool" style={{ color: "#689f63" }} />,
            linux: <SiLinux className="tool" />,
            jest: <SiJest className="tool" style={{ color: "#99425b" }} />,
            c: <SiCodio className="tool" style={{ color: "#5c6bc0" }} />,
            ruby: <DiRuby className="tool" style={{ color: "#e51f49" }} />,
            django: (
                <DiDjango
                    className="tool"
                    style={{ color: "#103e2e", fontSize: "150%" }}
                />
            ),
            mongodb: (
                <SiMongodb className="tool" style={{ color: "#50aa4c" }} />
            ),
            googlecloud: (
                <SiGooglecloud className="tool" style={{ color: "#1a73e8" }} />
            ),
            mocha: <SiMocha className="tool" style={{ color: "#8d6748" }} />,
            bootstrap: (
                <SiBootstrap className="tool" style={{ color: "#553a7d" }} />
            ),
            cpp: <SiCplusplus className="tool" style={{ color: "#649ad2" }} />,
            github: <GoMarkGithub className="tool" />,
            npm: (
                <SiNpm
                    className="tool"
                    style={{ color: "#cc3534", fontSize: "150%" }}
                />
            ),
            word: (
                <SiMicrosoftword
                    className="tool"
                    style={{ color: "#233a7c" }}
                />
            ),
            excel: (
                <SiMicrosoftexcel
                    className="tool"
                    style={{ color: "#207345" }}
                />
            ),
            powerpoint: (
                <SiMicrosoftpowerpoint
                    className="tool"
                    style={{ color: "#d24625" }}
                />
            ),
            windows: (
                <SiWindows className="tool" style={{ color: "#00bdf6" }} />
            ),
        };
        return (
            <div id="root" style={{ position: "absolute" }}>
                <Front />
                <Navigation />
                <AboutMe />
                <Skills tools={tools} />
                <Projects tools={tools} />
                <Education />
                <Experience />
                <ContactMe />
            </div>
        );
    }
}

export default App;

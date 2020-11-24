import React from "react";
import { Container, Row } from "react-bootstrap";
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
} from "react-icons/si";
import "./Skill.css";

class Skill extends React.Component {
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

        const { langs, header, text } = this.props.skill;

        return (
            <div id="skill">
                <Container id="skill-container" fluid>
                    <Row>
                        <h3 id="skill-icons">
                            {langs.map((lang) => tools[lang])}
                        </h3>
                    </Row>
                    <Row>
                        <h5 id="skill-sub">
                            <strong>{header}</strong>
                        </h5>
                    </Row>
                    <Row>
                        <p id="skill-text">{text}</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Skill;

import React from "react";
import { Card, Container } from "react-bootstrap";
import { ImFolderOpen } from "react-icons/im";
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";
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
} from "react-icons/si";
import Tilt from "react-tilt";
import "./Project.css";

class Project extends React.Component {
    getLink = (link) => {
        let dest = link["github"];

        if (dest) {
            return (
                <a href={dest} target="_blank" rel="noopener noreferrer">
                    <GoMarkGithub style={styles.link} />
                </a>
            );
        }
        dest = link["url"];

        if (dest) {
            return (
                <a href={dest} target="_blank" rel="noopener noreferrer">
                    <GoLinkExternal style={styles.link} />
                </a>
            );
        }

        return null;
    };

    render() {
        const toolDict = {
            java: <SiJava className="tool" style={{ color: "#ec2025" }} />,
            javascript: (
                <SiJavascript
                    className="tool"
                    style={{ color: "#f7e018", backgroundColor: "black" }}
                />
            ),
            python: <SiPython className="tool" />,
            html: <SiHtml5 className="tool" style={{ color: "#e44d26" }} />,
            css: <SiCss3 className="tool" style={{ color: "#379ad6" }} />,
            react: <SiReact className="tool" style={{ color: "#7ddfff" }} />,
            reactnative: (
                <SiReact className="tool" style={{ color: "#7ddfff" }} />
            ),
            node: <SiNodeDotJs className="tool" style={{ color: "#689f63" }} />,
            linux: <SiLinux className="tool" />,
            jest: <SiJest className="tool" />,
            c: <SiCodio className="tool" style={{ color: "#5c6bc0" }} />,
            ruby: <DiRuby className="tool" />,
            django: <DiDjango className="tool" />,
            mongodb: (
                <SiMongodb className="tool" style={{ color: "#50aa4c" }} />
            ),
            googlecloud: <SiGooglecloud className="tool" />,
            mocha: <SiMocha className="tool" />,
            bootstrap: <SiBootstrap className="tool" />,
            cpp: <SiCplusplus className="tool" />,
        };

        const { links, title, description, tools } = this.props.project;

        return (
            <Tilt id="tilt-container" options={{ max: 2.5, scale: 1.07 }}>
                <Container id="card-container" style={styles.container}>
                    <Card style={styles.card}>
                        <Card.Body id="card-body">
                            <Card.Title id="top-links" className="d-flex">
                                <ImFolderOpen
                                    id="folder-icon"
                                    className="mr-auto"
                                />

                                {links.map((link) => this.getLink(link))}
                            </Card.Title>

                            <Card.Subtitle id="card-title">
                                {title}
                            </Card.Subtitle>
                            <Card.Text style={styles.description}>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Title id="bottom-links">
                                {tools.map((tool) => toolDict[tool])}
                            </Card.Title>
                        </Card.Footer>
                    </Card>
                </Container>
            </Tilt>
        );
    }
}

const styles = {
    container: { paddingBottom: 25, height: "100%" },
    card: { backgroundColor: "#eee", borderWidth: 0, height: "100%" },
    description: { color: "#39689b" },
    link: { marginRight: 7, color: "black" },
};

export default Project;

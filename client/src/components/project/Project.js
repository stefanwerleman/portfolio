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
                    <GoMarkGithub style={styles.githublink} />
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
        // TODO: Bring this to Root component when ready, because Skill component will need this.
        const toolDict = {
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
                    style={{ color: "#103e2e", fontSize: "xx-large" }}
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
    githublink: { color: "black", marginRight: 7 },
    link: { marginRight: 7 },
};

export default Project;

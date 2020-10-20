import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

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
} from "react-icons/si";
class Project extends React.Component {
    getLink = (link) => {
        let dest = link["github"];
        console.log("dest", dest);
        if (dest) {
            return (
                <a href={dest} target="_blank">
                    <GoMarkGithub style={styles.link} />
                </a>
            );
        }
        dest = link["url"];

        if (dest) {
            return (
                <a href={dest} target="_blank">
                    <GoLinkExternal style={styles.link} />
                </a>
            );
        }

        return null;
    };

    render() {
        const toolDict = {
            java: <SiJava style={styles.tool} />,
            javascript: <SiJavascript style={styles.tool} />,
            python: <SiPython style={styles.tool} />,
            html: <SiHtml5 style={styles.tool} />,
            css: <SiCss3 style={styles.tool} />,
            react: <SiReact style={styles.tool} />,
            reactnative: <SiReact style={styles.tool} />,
            node: <SiNodeDotJs style={styles.tool} />,
            linux: <SiLinux style={styles.tool} />,
            jest: <SiJest style={styles.tool} />,
            c: <SiCodio style={styles.tool} />,
            ruby: <DiRuby style={styles.tool} />,
            django: <DiDjango style={styles.tool} />,
            mongodb: <SiMongodb style={styles.tool} />,
            googlecloud: <SiGooglecloud style={styles.tool} />,
            mocha: <SiMocha style={styles.tool} />,
            bootstrap: <SiBootstrap style={styles.tool} />,
        };

        const { links, title, description, tools } = this.props.project;

        return (
            <Container style={{ paddingBottom: 25 }}>
                <Card style={styles.card}>
                    <Card.Body>
                        <Card.Title className="d-flex">
                            <ImFolderOpen className="mr-auto" />

                            {links.map((link) => this.getLink(link))}
                        </Card.Title>

                        <Card.Subtitle>{title}</Card.Subtitle>
                        <Card.Text style={styles.description}>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Title>
                            {tools.map((tool) => toolDict[tool])}
                        </Card.Title>
                    </Card.Footer>
                </Card>
            </Container>
        );
    }
}

const styles = {
    card: { backgroundColor: "#eee", borderWidth: 0, height: "100%" },
    description: { color: "#39689b" },
    tool: { marginRight: 7 },
    link: { marginRight: 7, color: "black" },
};

export default Project;

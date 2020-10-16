import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

import { DiRuby, DiDjango } from "react-icons/di";
import { ImFolderOpen } from "react-icons/im";
import { GoMarkGithub, GoLinkExternal } from "react-icons/go";
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
} from "react-icons/si";
class Project extends React.Component {
    render() {
        const { links, title, description, tools } = this.props.project;

        return (
            <Container>
                <Card style={styles.card}>
                    <Card.Body>
                        <Card.Title className="d-flex">
                            <ImFolderOpen className="mr-auto" />

                            <GoMarkGithub />
                            <GoLinkExternal />
                        </Card.Title>

                        <Card.Subtitle>{title}</Card.Subtitle>
                        <Card.Text style={styles.description}>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Title style={{}}>
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
                            <SiJavascript />
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
};

export default Project;

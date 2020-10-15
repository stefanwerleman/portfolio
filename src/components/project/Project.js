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
                        <Card.Text style={{ color: "#39689b" }}>
                            {description}
                        </Card.Text>
                        <Card.Title>
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
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

const styles = {
    card: { backgroundColor: "#eee", borderWidth: 0 },
};

export default Project;

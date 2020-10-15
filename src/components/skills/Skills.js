import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    SiCodio,
    SiJava,
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";

class Skills extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Technical Skills</p>
                            <hr
                                style={{
                                    borderColor: "#39689b",
                                    borderWidth: 5,
                                }}
                            />
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2>Languages:</h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="auto">
                            <h5>
                                <strong>C</strong>
                            </h5>
                        </Col>
                        <Col md="auto">
                            <h5>
                                <strong>Java</strong>
                            </h5>
                        </Col>
                        <Col md="auto">
                            <h5>
                                <strong>JavaScript</strong>
                            </h5>
                        </Col>
                        <Col md="auto">
                            <h5>
                                <strong>Python</strong>
                            </h5>
                        </Col>
                        <Col md="auto">
                            <h5>
                                <strong>HTML5</strong>
                            </h5>
                        </Col>
                        <Col md="auto">
                            <h5>
                                <strong>CSS</strong>
                            </h5>
                        </Col>
                        <Col md="auto">
                            <h5>
                                <strong>Ruby</strong>
                            </h5>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5>Frameworks:</h5>

                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Jest</li>
                                <li>Mocha</li>
                                <li>Django</li>
                                <li>Pandas</li>
                                <li>Jupyter Notebook</li>
                                <li>React Native</li>
                                <li>Expo CLI</li>
                            </ul>
                        </Col>
                        <Col md="auto">
                            <h5>Databases:</h5>
                            <ul>
                                <li>MongoDB</li>
                            </ul>
                        </Col>
                        <Col md="auto">
                            <h5>Version Control:</h5>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                        </Col>
                        <Col md="auto">
                            <h5>Operating Systems:</h5>
                            <ul>
                                <li>Linux</li>
                                <li>Windows</li>
                            </ul>
                        </Col>
                        <Col md="auto">
                            <h5>Other Technical Skills:</h5>
                            <ul>
                                <li>Ubuntu WSL</li>
                                <li>Markdown</li>
                                <li>Excel</li>
                                <li>Word</li>
                                <li>PowerPoint</li>
                                <li>LaTeX</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: "5.20%",
        paddingBottom: "12.13%",
        backgroundColor: "#eee",
    },
};

export default Skills;

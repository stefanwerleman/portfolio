import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Project from "../project/Project";
import uuid from "uuid";

class Projects extends React.Component {
    state = {
        projects: [
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/facebook-clone",
                    url: "https://github.com/stefanwerleman/facebook-clone",
                },
                title: "Facebook Clone",
                description:
                    "Developed a full-stack website that simulates a basic user chat system.",
                tools: [
                    "javascript",
                    "nodejs",
                    "expressjs",
                    "mongodb",
                    "html",
                    "css",
                ],
            },
        ],
    };
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Projects</p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row lg={3} className="justify-content-md-center">
                        <Project
                            key={this.state.id}
                            project={this.state.projects[0]}
                        />
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: "5.20%",
        paddingLeft: "7.20%",
        paddingRight: "7.20%",
        paddingBottom: "12.13%",
    },
    mainLine: {
        borderColor: "#39689b",
        borderWidth: 5,
    },
};

export default Projects;

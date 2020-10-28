import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "../project/Project";
import projectList from "../projectObjects/projectObjects";
import Tilt from "react-tilt";

class Projects extends React.Component {
    state = {
        projects: projectList,
    };
    render() {
        return (
            <div id="projects">
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Projects</p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p>
                                Some of these projects consist of web
                                applications for internship challenges,
                                Hackathons, or as coursework from some of my
                                classes. The projects that are from some of my
                                courses will not be available publicly on GitHub
                                for Academic Integrity Guidelines by UCF.
                            </p>
                            <br />
                        </Col>
                    </Row>
                    <Row lg={3} className="justify-content-md-center">
                        {this.state.projects.map((project) => (
                            <Tilt options={{ max: 2.5, scale: 1.07 }}>
                                <Project key={project.id} project={project} />
                            </Tilt>
                        ))}
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
        borderColor: "#FF1B1C",
        borderWidth: 5,
    },
};

export default Projects;

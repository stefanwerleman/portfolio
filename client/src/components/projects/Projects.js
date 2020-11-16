import React from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import Project from "../project/Project";
import projectList from "../projectObjects/projectObjects";

class Projects extends React.Component {
    state = {
        projects: projectList,
        isExpanded: false,
    };

    handleExpand = () => {
        this.setState({ isExpanded: true });
    };

    handleCollapse = () => {
        this.setState({ isExpanded: false });
    };

    toggleButton = (isExpanded) => {
        if (!isExpanded) {
            return (
                <Button variant="primary" onClick={this.handleExpand}>
                    Show More
                </Button>
            );
        } else {
            return (
                <Button variant="outline-primary" onClick={this.handleCollapse}>
                    Show Less
                </Button>
            );
        }
    };

    getOtherProjects = (projects) => {
        const otherProjects = projects.filter((project) => project.number > 2);
        return otherProjects;
    };

    render() {
        const { isExpanded, projects } = this.state;

        const otherProjects = this.getOtherProjects(projects);

        return (
            <div id="projects">
                <Container
                    id="projects-container"
                    style={styles.container}
                    fluid
                >
                    <Row id="title-row" className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Projects</p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row id="text-row" className="justify-content-md-center">
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
                    <Row
                        id="project-row"
                        lg={3}
                        className="justify-content-md-center"
                    >
                        <Project key={projects[0].id} project={projects[0]} />
                        <Project key={projects[1].id} project={projects[1]} />
                        <Project key={projects[2].id} project={projects[2]} />
                    </Row>
                    <Collapse id="projects-collapse" in={isExpanded}>
                        <Row
                            id="more-projects-row"
                            lg={3}
                            className="justify-content-md-center"
                            style={{ paddingBottom: 75 }}
                        >
                            {otherProjects.map((project) => (
                                <Project key={project.id} project={project} />
                            ))}
                        </Row>
                    </Collapse>
                    <Row
                        id="button-container"
                        className="justify-content-md-center"
                    >
                        <Col md="auto">{this.toggleButton(isExpanded)}</Col>
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

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
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/full-stack-app",
                    url:
                        "https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/",
                },
                title: "All Things Books",
                description:
                    "Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.",
                tools: [
                    "javascript",
                    "nodejs",
                    "expressjs",
                    "mongodb",
                    "html",
                    "css",
                ],
            },
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/facebook-clone",
                    url: "https://github.com/stefanwerleman/facebook-clone",
                },
                title: "This Personal Website",
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
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/full-stack-app",
                    url:
                        "https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/",
                },
                title: "Cloudflare Workers Full Stack Challenge",
                description:
                    "Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.",
                tools: [
                    "javascript",
                    "nodejs",
                    "expressjs",
                    "mongodb",
                    "html",
                    "css",
                ],
            },
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/full-stack-app",
                    url:
                        "https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/",
                },
                title: "Skip List",
                description:
                    "Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.",
                tools: [
                    "javascript",
                    "nodejs",
                    "expressjs",
                    "mongodb",
                    "html",
                    "css",
                ],
            },
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/full-stack-app",
                    url:
                        "https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/",
                },
                title: "Document Drop Application",
                description:
                    "Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.",
                tools: [
                    "javascript",
                    "nodejs",
                    "expressjs",
                    "mongodb",
                    "html",
                    "css",
                ],
            },
            {
                id: uuid(),
                links: {
                    github: "https://github.com/stefanwerleman/full-stack-app",
                    url:
                        "https://stefanwerleman-full-stack-app.stefanwerleman.workers.dev/",
                },
                title: "Trie Object",
                description:
                    "Developed a web application that sends the user to two of one webpages. This challenge helped me learn how to write applications with the Cloudflare Workers API. The command-line tool Wrangler was used on the Linux terminal to run and deploy the application.",
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
                            <Project key={project.id} project={project} />
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

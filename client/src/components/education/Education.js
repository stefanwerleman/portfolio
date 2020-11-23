import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Education.css";

// TODO: Include FLit-Path Organization in here.
class Education extends React.Component {
    render() {
        return (
            <div id="education">
                <Container id="education-container" fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="education-title" className="display-4">
                                Education
                            </p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2 id="education-school">
                                <strong>University of Central Florida</strong>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5
                                id="education-major"
                                style={{ color: "#39689b" }}
                            >
                                Bachelor of Science in Computer Science
                            </h5>
                        </Col>
                    </Row>
                    <Row
                        id="education-info-row"
                        className="justify-content-md-center"
                    >
                        <Col md="auto">
                            <h5 id="education-info">
                                <strong>Graduating:</strong> August 2021 |{" "}
                                <strong>GPA:</strong> 3.826
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="education-text">
                                Studied Algorithms and Data Structures, Discrete
                                Mathematics, Web Development, and Computer
                                Architecture. Here I have gained a strong
                                foundation in computing, mathematical theory of
                                computing, and different programming pardigms. I
                                learned the core fundamentals of algorithms,
                                data structures, and problem solving with the C
                                and Java programming languages.
                                <br />
                                <br />
                                In the Spring of 2020, I took a competitive
                                programming course that allowed me to practice
                                and improve on my problem-solving skills,
                                algorithms, and data structures. This course put
                                me in a competitive environment with individual,
                                team, and online contests. Online contests were
                                used frequently to prepare for the in-class
                                contests, such as CodeForces, Google Code Jam,
                                Kattis, and UCF's programming team practice
                                contests.
                                <br />
                                <br />
                                Now I am currently taking a functional
                                programming class where I am learning Haskell
                                and Erlang. I am also starting to learn Data
                                Science to continue on to one of my favorite
                                topics, Machine Learning.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    mainLine: {
        borderColor: "#FF1B1C",
        borderWidth: 5,
    },
};

export default Education;

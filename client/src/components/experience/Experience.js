import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";

class Experience extends React.Component {
    render() {
        return (
            <div id="experience">
                <Container id="experience-container" fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="experience-title" className="display-4">
                                Experience
                            </p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2 id="experience-company">
                                <strong>
                                    Car Wash Palace and Detail Center
                                </strong>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5
                                id="experience-position"
                                style={{ color: "#39689b" }}
                            >
                                Detail Specialist and Sales Associate
                            </h5>
                        </Col>
                    </Row>
                    <Row
                        id="experience-date-row"
                        className="justify-content-md-center"
                    >
                        <Col md="auto">
                            <h5 id="experience-info">
                                <em>May 2017 - PRESENT</em>
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p id="experience-text">
                                Currently work 30 hours a week. Perform auto
                                detailing services on various vehicles and am
                                responsible for the sales of detail sercives and
                                products. This is a part-time job to support
                                myself and my living expenses. This job really
                                helped with my interpersonal skils at a
                                professional level.
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

export default Experience;

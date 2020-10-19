import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Experience</p>
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h2>
                                <strong>
                                    Car Wash Palace and Detail Center
                                </strong>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5 style={{ color: "#39689b" }}>
                                Detail Specialist and Sales Associate
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5>
                                <em>May 2017 - PRESENT</em>
                            </h5>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p>
                                Currently work 30 hours a week. Perform auto
                                detailing services on various vehicles and am
                                responsible for the sales of detail sercives and
                                products.
                            </p>
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
    },
    mainLine: {
        borderColor: "#FF1B1C",
        borderWidth: 5,
    },
};

export default Experience;

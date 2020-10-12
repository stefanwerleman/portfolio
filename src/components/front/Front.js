import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class Front extends React.Component {
    render() {
        return (
            <div style={styles.front}>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1 className="display-4">
                                <strong>STEFAN WERLEMAN</strong>
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h6>
                                ______________________________________________________________________
                            </h6>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h5>COMPUTER SCIENCE STUDENT AT UCF</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    front: {
        color: "white",
    },
    container: {
        backgroundColor: "#6c757d",
        padding: "17.28%",
    },
};

export default Front;

import React from "react";
import { Container, Row, Col, Media } from "react-bootstrap";
import "./Front.css";

class Front extends React.Component {
    render() {
        return (
            <div id="front" style={styles.front}>
                <Container id="container" style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col xs="auto">
                            <h1 id="name" className="display-3">
                                <strong>STEFAN WERLEMAN</strong>
                                <hr style={styles.mainLine} />
                            </h1>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col xs="auto">
                            <h4>COMPUTER SCIENCE STUDENT AT UCF</h4>
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
        backgroundColor: "#0d2c5a",
        opacity: 0.7,
    },
    mainLine: {
        borderColor: "white",
        borderWidth: 5,
    },
};

export default Front;

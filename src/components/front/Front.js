import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Front.css";

class Front extends React.Component {
    render() {
        return (
            <div className="Front" style={styles.front}>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <h1 className="display-3">
                                <strong>STEFAN WERLEMAN</strong>
                                <hr style={styles.mainLine} />
                            </h1>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col md="auto">
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
        paddingTop: "16.68%",
        paddingLeft: "16.68%",
        paddingRight: "16.68%",
        paddingBottom: "15.15%",
    },
    mainLine: {
        borderColor: "white",
        borderWidth: 5,
    },
};

export default Front;

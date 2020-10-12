import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class ContactMe extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.container} fluid>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p className="display-4">Contact Me</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <p>
                                _______________________________________________
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
        // padding: "21.13%",
        backgroundColor: "#39689b",
        color: "white",
    },
};

export default ContactMe;

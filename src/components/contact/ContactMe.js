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
                            <hr style={styles.mainLine} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        backgroundColor: "#39689b",
        color: "white",
        paddingTop: "5.20%",
    },
    mainLine: { borderColor: "white", borderWidth: 5 },
};

export default ContactMe;

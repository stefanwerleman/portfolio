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
                </Container>
            </div>
        );
    }
}

const styles = {
    container: {
        paddingTop: "5.20%",
    },
    mainLine: {
        borderColor: "#39689b",
        borderWidth: 5,
    },
};

export default Experience;
